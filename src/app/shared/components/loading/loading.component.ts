import { AsyncPipe, NgIf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject, Signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '@core/services/loading/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule, NgIf, AsyncPipe],
  styles: [
    `
      .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
      }
    `,
  ],
  template: `@if (showSpinner()) {
    <mat-progress-spinner class="spinner" mode="indeterminate" />
  } `,
})
export class LoadingComponent {
  public readonly loadingService: LoadingService = inject(LoadingService);
  showSpinner: Signal<boolean> = toSignal(this.loadingService.loading$, {
    initialValue: true,
  });
}
