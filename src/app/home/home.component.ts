import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  presupuesto:number = 0;
  ingresos:number = 0;
  gastos:number = 0;
  divisa:string = 'No asignada';
  existPresupuesto:boolean = false;
  presupuestoForm = this.formBuilder.group({
    presupuesto: ['', [Validators.required]],
    divisa: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

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
    this.getData();
  }

  getData(){
    const localIngresos = localStorage.getItem("ingresos");
    const localGastos = localStorage.getItem("gastos");
    if(localIngresos){
      this.ingresos = +localIngresos;
    }
    if(localGastos){
      this.gastos = +localGastos;
    }
  }

  onSubmit() {
    this.existPresupuesto = true;
    if(this.presupuestoForm.value.presupuesto){
      const localPresupuesto = this.presupuestoForm.value.presupuesto;
      this.presupuesto = +localPresupuesto;
      localStorage.setItem('presupuesto', JSON.stringify(this.presupuesto));
      localStorage.setItem("registros", JSON.stringify([]));
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
    this.router.navigateByUrl('/gastos');
  }

  get formControls(){
    return this.presupuestoForm.controls;
  }
}
