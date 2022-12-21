import {Component, OnInit} from '@angular/core';
import {DoctorService} from "./doctor.service";
import {ConsultationDetails, Patient} from "../../patient/Models/Ptientmodel";
import {PatientService} from "../../patient/patient.service";
import {NgForm} from '@angular/forms';


@Component({
  selector: 'doctor-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page: number = 1;
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  pendingAppointments: Array<ConsultationDetails> = [];
  parkedPatients: Array<ConsultationDetails> = [];

  completedConsultations: Array<ConsultationDetails> = [];
  patientConsultationDetails: Array<ConsultationDetails> = [];
  isClickedConsultButton: boolean = false;
  patient: Patient = new Patient();
  patientage!: number;

  elements: Array<number> = [1];
  appointmentId!: string;

  constructor(private doctorService: DoctorService, private patientService: PatientService) {
  }


  add() {
    this.elements.push(1);
  }

  // @ViewChild('container', {static: true})
  // container!: HTMLElement;


  pendingBookings() {
    this.pendingAppointments = [];
    this.doctorService.getPendingBookingsOfDoctor().subscribe(data => {
      for (let datum of data) {
        let ob: ConsultationDetails = JSON.parse(JSON.stringify(datum));
        this.pendingAppointments.push(ob)
      }
      console.log(this.pendingAppointments);
    });
  }


  completedBookings() {
    this.completedConsultations = [];

    this.doctorService.getCompletedConsultationsOfDoctor().subscribe(data => {
      for (const datum of data) {
        this.completedConsultations.push(JSON.parse(JSON.stringify(datum)));
      }
      console.log(this.completedConsultations);
    });
  }

  ngOnInit() {

    this.parkedPatients = [];
    this.completedBookings();
    this.pendingBookings();


    this.doctorService.getParkedPatientsOfDoctor().subscribe(data => {
      for (const datum of data) {
        this.parkedPatients.push(JSON.parse(JSON.stringify(datum)));
      }
      console.log(this.parkedPatients);
    });


  }

  handleConsultation(appointmentId: string, doctorId: string, patientId: string) {

    this.appointmentId = appointmentId;
    this.isClickedConsultButton = true;
    this.patientConsultationDetails = [];
    this.patientService.getCompletedConsultations(patientId).subscribe(data => {
      for (const datum of data) {
        this.patientConsultationDetails.push(JSON.parse(JSON.stringify(datum)))
      }
      console.log(this.patientConsultationDetails);
    });

    this.patientService.getPatientById(patientId).subscribe(data => {
      this.patient = JSON.parse(JSON.stringify(data));
      console.log(this.patient);
    });

  }

  getDate(dob: string) {
    this.patientage = new Date().getFullYear() - parseInt(dob.split('T')[0].split('-')[0]);
    console.log(this.patientage);
  }


  remove() {
    this.elements.pop();
  }

  submit() {
    this.isClickedConsultButton = false;
  }

  handleSubmit(form: NgForm) {

    let medicines: Array<string> = [];
    let frequency: Array<string> = [];
    let number: Array<string> = [];
    for (const i in form.value) {
      if (i.startsWith('m')) {
        medicines.push(form.value[i]);
      } else if (i.startsWith('f')) {
        frequency.push(form.value[i])
      } else if (i.startsWith('n')) {
        number.push(form.value[i]);
      }
    }

    let medication: string = "";
    for (let i = 0; i < medicines.length; i++) {
      medication += `${medicines[i]}:${number[i]}:${frequency[i]};`
    }

    let ob = {
      "AppointmentId": this.appointmentId,
      "Diagnosis": form.value['email'],
      "Medications": medication,
      "Radiology": "",
      "LabTest": " ",
      "Remarks": form.value['remarks'],
      "Status": "ok",
      "Session": "ok",
      "ConsultationMode": "ok"
    };

    console.log(ob);
    this.doctorService.putDiagnostics(ob).subscribe(data => {
      console.log(data);
      this.pendingBookings();
      this.completedBookings();
      this.isClickedConsultButton = false;

    });
  }


  // onTableDataChange(event: any) {
  //   this.page = event;
  // }
  // onTableSizeChange(event: any): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  // }
}
