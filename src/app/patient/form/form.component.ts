import {Component} from '@angular/core';
import {PatientService} from "../patient.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent {

  constructor(private patient: PatientService) {

  }

  greet(f: any) {


  }


}
