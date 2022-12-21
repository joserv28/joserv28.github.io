import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { GastosComponent } from './gastos/gastos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'gastos', component: GastosComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'eliminar', component: EliminarComponent},
  {path: 'editar', component: EditarComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
