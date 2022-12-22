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
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {
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
  element:any = {
    nombre: '',
    categoria: '',
    monto: 0
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    const localRegistros = localStorage.getItem("registros");
    if(localRegistros){
      let elements = JSON.parse(localRegistros);
      this.element = elements[window.history.state.id];
      this.agregarRegistroForm.setValue({
        nombre: this.element.nombre,
        categoria: this.element.categoria,
        monto: this.element.monto
      }); 
    }
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
        nuevosRegistros[window.history.state.id] = registro;
        localStorage.setItem("registros", JSON.stringify(nuevosRegistros));
      }else{
        let nuevosRegistros = [];
        nuevosRegistros[window.history.state.id] = registro;
        localStorage.setItem("registros", JSON.stringify(nuevosRegistros));
      }
      let localRegistros2 = localStorage.getItem("registros");
      if(localRegistros2){
        let elements = JSON.parse(localRegistros2);
        let ingresos = 0;
        let gastos = 0;
        for (var i = 0; i < elements.length; i+=1) {
          if(elements[i].categoria == 'ingreso'){
            ingresos = ingresos + elements[i].monto;
          }else{
            gastos = gastos + elements[i].monto;
          }
        }
        localStorage.setItem('ingresos', JSON.stringify(ingresos));
        localStorage.setItem('gastos', JSON.stringify(gastos));
      }
      this.router.navigateByUrl('/gastos');
    }

  }

  back(){
    this.router.navigateByUrl('/gastos');
  }
}
