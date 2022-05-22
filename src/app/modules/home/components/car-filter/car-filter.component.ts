import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.sass'],
})
export class CarFilterComponent {
  form!: FormGroup;
  @Output() searchText: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      search: new FormControl(),
    });
  }

  emitText(): void {
    this.searchText.emit(this.form.get('search')?.value);
  }
}
