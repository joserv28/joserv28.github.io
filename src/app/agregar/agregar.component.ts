import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Registro {
  nombre: string;
  categoria: string;
  monto: number;
}

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent implements OnInit {
  agregarRegistroForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    monto: [, [Validators.required]],
  });
  categories: Category[] = [
    {value: 'ingreso', viewValue: 'Ingreso'},
    {value: 'egreso', viewValue: 'Egreso genérico'},
    {value: 'vivienda', viewValue: 'Vivienda'},
    {value: 'transporte', viewValue: 'Transporte'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {

  }

  onSubmit(){
    const localNombre = this.agregarRegistroForm.value.nombre;
    const localCategoria = this.agregarRegistroForm.value.categoria;
    const localMonto = this.agregarRegistroForm.value.monto;
    if(localNombre && localCategoria && localMonto){
      const registro:Registro = {
        nombre: localNombre,
        categoria: localCategoria,
        monto: +localMonto
      }
      let localRegistros = localStorage.getItem("registros");
      if(localRegistros){
        let nuevosRegistros = JSON.parse(localRegistros);
        nuevosRegistros.push(registro);
        localStorage.setItem("registros", JSON.stringify(nuevosRegistros));
      }else{
        let nuevosRegistros = [];
        nuevosRegistros.push(registro);
        localStorage.setItem("registros", JSON.stringify(nuevosRegistros));
      }
      //gastos e ingresos
      if(localCategoria == 'ingreso'){
        let localIngreso = localStorage.getItem("ingresos");
        localIngreso = localIngreso + localMonto;
        localStorage.setItem('ingresos', JSON.stringify(localIngreso));
      }else{
        let localGasto = localStorage.getItem("gastos");
        localGasto = localGasto + localMonto;
        localStorage.setItem('gastos', JSON.stringify(localGasto));
      }
      this.router.navigateByUrl('/gastos');
    }

  }

  back(){
    this.router.navigateByUrl('/gastos');
  }

}
