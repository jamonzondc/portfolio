import { Component } from '@angular/core';
import { MatMiniFabButton } from '@angular/material/button'
import { ClipboardButtonComponent } from 'ngx-markdown';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-clipboard-button-wrapper',
  standalone: true,
  imports: [MatMiniFabButton, MatIconModule],
  styleUrl: './clipboard-button-wrapper.component.scss',
  template: `
    <button mat-mini-fab aria-label="Copy button" (click)="onCopyToClipboardClick()"> 
      <mat-icon>menu</mat-icon>
    </button>
  `
})
export class ClipboardButtonWrapperComponent extends ClipboardButtonComponent {

}
