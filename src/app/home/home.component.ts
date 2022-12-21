import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  presupuestoForm = this.formBuilder.group({
    presupuesto: ['', Validators.required],
    divisa: [''],
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.presupuestoForm.value);
  }
}
