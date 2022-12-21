import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {NgxPaginationModule} from "ngx-pagination";
import { PatientHomeComponent } from './patient-home/patient-home.component';
import {BookappointmentComponent} from "./book-appointment/book-ppointment.component";
import {FormsModule} from "@angular/forms";
import {FormComponent} from './form/form.component';


@NgModule({
  declarations: [
    HomepageComponent,
    PatientHomeComponent,
    BookappointmentComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    NgxPaginationModule,
    FormsModule

  ]
})
export class PatientModule { }
