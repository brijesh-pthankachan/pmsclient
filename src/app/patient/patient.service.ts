import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {

  }

  postBooking(data: any) {
    return this.http.post("https://localhost:7296/api/PatientService/BookAppointment", data);
  }


  getBookings(patientId: string) {

    return this.http.get<Array<object>>('https://localhost:7296/api/PatientService/GetPendingAppointments/' + patientId);

  }

  getCompletedConsultations(patientId:string){
    return this.http.get<Array<object>> ( 'https://localhost:7296/api/PatientService/GetConsultationDetails/'+patientId);

  }

  getLinkedAccounts ( ):Observable<Array<object>> {
    return this.http.get<Array<object>> ( 'https://localhost:7296/api/PatientService/GetLinkedAccounts/c49e6d46-3ed9-4250-92c7-fb1f015e68c2');
  }

  getLinkedAccountDetails () {

  }

  getDoctors() {
    return this.http.get<Array<object>> ( 'https://localhost:7296/api/Doctor');
  }

  getDoctorById(doctorId:string){
    return this.http.get<Array<object>> ( 'https://localhost:7296/api/Doctor/'+doctorId);
  }

  getPatientById(patientId:string){
    return this.http.get<Array<object>> ( 'https://localhost:7296/api/Patient/'+patientId);
  }


}
