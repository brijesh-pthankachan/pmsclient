import { Component } from '@angular/core';
import {ConsultationDetails, Patient} from "../Models/Ptientmodel";
import {PatientService} from "../patient.service";

@Component({
  selector: 'patient-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent {

  patients : Array<Patient> = [];
  consulations:Array<ConsultationDetails>=[]
  Bookings:Array<ConsultationDetails>=[]
  page = 1;
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  medications: Array<string>=[];

  constructor ( private patientService : PatientService ) {
  }


  ngOnInit () {

    this.patientService.getLinkedAccounts ().subscribe ( data => {
      for ( let datum of data ) {
        let ob : Patient = JSON.parse ( JSON.stringify ( datum ) );
        this.patients.push ( ob )
      }
      // console.log ( data )
    } )
  }

  viewConsultations(patientId: string) {
    console.log(patientId);
    this.consulations=[];
    this.patientService.getCompletedConsultations(patientId).subscribe(data=>{
      for ( let datum of data ) {
        let ob : ConsultationDetails = JSON.parse ( JSON.stringify ( datum ) );
        ob.date=ob.date.split('T')[0];
        this.consulations.push ( ob );
        console.log(this.consulations);
      }
    })

  }



  viewBookings(patientId: string) {
    console.log(patientId);
    this.Bookings=[];
    this.patientService.getBookings(patientId).subscribe(data=>{
      for ( let datum of data ) {
        let ob : ConsultationDetails = JSON.parse ( JSON.stringify ( datum ) );
        ob.date=ob.date.split('T')[0];
        this.Bookings.push ( ob );
        console.log(this.Bookings);
      }
    })

  }

}
