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
      localStorage.setItem("registros", JSON.stringify(elements));
      this.router.navigateByUrl('/gastos');
    }
  }

  back(){
    this.router.navigateByUrl('/gastos');
  }

}
