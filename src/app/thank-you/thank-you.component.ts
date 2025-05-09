import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  imports: [],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss',
})
export class ThankYouComponent {
  //Inputs
  value = input.required<string>();

  //Outpus
  close = output();

  //Methods
  onClose() {
    this.close.emit();
  }
}
