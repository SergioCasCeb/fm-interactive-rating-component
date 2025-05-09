import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  //Properties
  reviewValue = '';

  //Output
  submitReview = output<string>();

  //Methods
  onSubmit() {
    this.submitReview.emit(this.reviewValue);
    this.reviewValue = '';
  }
}
