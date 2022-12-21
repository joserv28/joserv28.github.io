import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { GastosComponent } from './gastos/gastos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GastosComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
