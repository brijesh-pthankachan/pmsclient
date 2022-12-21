import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }


  getPendingBookingsOfDoctor() {
    return this.http.get<Array<object>>('https://localhost:7296/api/DoctorService/GetPendingAppointments/2');
  }


  getParkedPatientsOfDoctor() {
    return this.http.get<any>('https://localhost:7296/api/DoctorService/GetParkedAppointments/2');
  }

  getCompletedConsultationsOfDoctor() {
    return this.http.get<any>('https://localhost:7296/api/Pharmacy/GetCompletedAppointments/2');
  }

  putDiagnostics(model: any) {
    return this.http.put<any>('https://localhost:7296/api/DoctorService/AddDiagnosis', model);
  }

}
