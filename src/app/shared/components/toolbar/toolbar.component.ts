import { Component, OnInit, OnDestroy, ApplicationRef, inject } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { first } from 'rxjs/operators';
import { TextMachineComponent } from '../text-machine/text-machine.component';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, MatIconButton, MatIcon, MatCardModule, TextMachineComponent],
  styleUrl: './toolbar.component.scss',
  template: ` 
  <mat-toolbar class="example-toolbar"> 
    <div class="flex-row justify-center">
      <img src="assets/soyj3.png" alt="Photo of a Jorge Alberto Monzon del Campo">
      <div class="flex-column  justify-center">
        <span class="title1">soy<span>JorgeMonzon</span></span>
        <app-text-machine text="🚀 Tech Lead | 👨‍💻 Senior Software Engineer | 📱 Ionic | 🅰️ Angular | 🧼 Clean Code | 🏛 Clean Architecture" fontSize="0.5" />
      </div>
    </div>
</mat-toolbar>`
})
export class ToolbarComponent {

}
