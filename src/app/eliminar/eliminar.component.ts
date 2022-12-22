import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.sass']
})
export class EliminarComponent {
  element:any = {
    nombre: '',
    categoria: '',
    monto: 0
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location:Location
    ) { }

  ngOnInit() {
    const localRegistros = localStorage.getItem("registros");
    if(localRegistros){
      let elements = JSON.parse(localRegistros);
      this.element = elements[window.history.state.id];
    }
  }

  eliminar(){
    const localRegistros = localStorage.getItem("registros");
    if(localRegistros){
      let elements = JSON.parse(localRegistros);
      elements = elements.filter((el: any,index: any) => index != window.history.state.id);
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
      localStorage.setItem("registros", JSON.stringify(elements));
      this.router.navigateByUrl('/gastos');
    }
  }

  back(){
    this.router.navigateByUrl('/gastos');
  }

}
