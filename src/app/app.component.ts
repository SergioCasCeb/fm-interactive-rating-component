import { Component, signal } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@Component({
  selector: 'body',
  imports: [FooterComponent, FormComponent, ThankYouComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //Properties
  reviewValue = signal<string>('');

  //Method
  showMsg(value: string) {
    this.reviewValue.set(value);

    setTimeout(() => {
      this.reviewValue.set('');
    }, 5000);
  }

  hideMsg() {
    this.reviewValue.set('');
  }
}
