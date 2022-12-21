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
    
  }

  goToAdd(){
    this.router.navigateByUrl('/agregar');
  }

  editar(index:number){

  }

  eliminar(index:number){

  }
}
