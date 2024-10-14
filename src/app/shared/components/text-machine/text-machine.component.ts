import { Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-text-machine',
    standalone: true,
    styles: [`    
.text-1-wraper {
    width: min-content;
}
.text-1 {
    font-size: var(--fontSize);
    text-transform: capitalize;
    font-weight: 600;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    
    font-family: 'Georgia', serif;
    font-style: italic;
   
    border-right: 0.15em solid #7744d9;
    animation: typing 4s steps(40) var(--delay, 0s) 1 normal both, blink 1s steps(1) infinite;
}
@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}
@keyframes blink {
    50% {
        border-color: transparent;
    }
}
    `],
    template: `
      <div class="text-1-wraper">
      <p class="text-1" [style.--delay]="delay() + 's'" [style.--fontSize]="fontSize() + 'em'">{{text()}}</p>
      </div>
  `
})
export class TextMachineComponent {
    text: InputSignal<string> = input.required<string>();
    delay: InputSignal<number> = input<number>(0);
    fontSize: InputSignal<string> = input<string>('0.4');
}
