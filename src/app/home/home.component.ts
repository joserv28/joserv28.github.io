import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  presupuesto:number = 0;
  divisa:string = 'No asignada';
  existPresupuesto:boolean = false;
  presupuestoForm = this.formBuilder.group({
    presupuesto: ['', [Validators.required]],
    divisa: [''],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const localPresupuesto = localStorage.getItem('presupuesto');
    if(localPresupuesto){
      this.presupuesto = +localPresupuesto;
      this.existPresupuesto = true;
      const localDivisa = localStorage.getItem('divisa');
      if(localDivisa){
        this.divisa = localDivisa;
      }
    }else{
      this.existPresupuesto = false;
    }
  }

  onSubmit() {
    this.existPresupuesto = true;
    if(this.presupuestoForm.value.presupuesto){
      const localPresupuesto = this.presupuestoForm.value.presupuesto;
      this.presupuesto = +localPresupuesto;
      localStorage.setItem('presupuesto', JSON.stringify(this.presupuesto));
    }
    if(this.presupuestoForm.value.divisa){
      this.divisa = this.presupuestoForm.value.divisa;
      localStorage.setItem('divisa', JSON.stringify(this.divisa));
    }
  }

  restart() {
    localStorage.clear();
    this.existPresupuesto = false;
    this.presupuesto = 0;
    this.divisa = 'No asignada';
  }

  goToGastos() {
    // TODO: redirecto to gastos
    console.log('go to Gastos');
  }

  get formControls(){
    return this.presupuestoForm.controls;
  }
}
