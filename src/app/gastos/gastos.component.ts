import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


export interface Registros {
  nombre: string;
  categoria: string;
  monto: number;
}

interface Category {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: Registros[] = [
  {nombre: "Gasto1", categoria: 'Gasto', monto: 1000},
  {nombre: "Gasto1", categoria: 'Gasto', monto: 1000},
  {nombre: "Gasto1", categoria: 'Gasto', monto: 1000},
  {nombre: "Gasto1", categoria: 'Gasto', monto: 1000},
];

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.sass']
})
export class GastosComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
  ingresos:number = 0;
  gastos:number = 0;
  presupuesto:number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    const localRegistros = localStorage.getItem("registros");
    if(localRegistros){
      this.dataSource = JSON.parse(localRegistros);
    }else{
      this.dataSource = [];
    }
    this.getData();
    
  }

  getData(){
    const localIngresos = localStorage.getItem("ingresos");
    const localGastos = localStorage.getItem("gastos");
    const localPresupuesto = localStorage.getItem('presupuesto');
    if(localIngresos){
      this.ingresos = +localIngresos;
    }
    if(localGastos){
      this.gastos = +localGastos;
    }
    if(localPresupuesto){
      this.presupuesto = +localPresupuesto;
    }
  }

  goToAdd(){
    this.router.navigateByUrl('/agregar');
  }

  goToHome(){
    this.router.navigateByUrl('/home');
  }

  editar(index:number){
    this.router.navigateByUrl('/editar', { state: { id: index} });
  }

  eliminar(index:number){
    this.router.navigateByUrl('/eliminar', { state: { id: index} });
  }
}
