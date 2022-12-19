import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {BookappointmentComponent} from "./book-appointment/book-ppointment.component";

const routes: Routes = [
  {path:'patient',component:HomepageComponent},
  {path:'patient/book',component:BookappointmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }