export class Patient {
  aadhar! : string
  bloodGroup! : string
  dob! : string
  emergencyContactNumber! : string;
  firstName! : string;
  gender! : string;
  houseNo! : string;
  id! : string
  lastName! : string;
  patientId! : string;
  patientPhoneNumber! : string;
  pincode! : string;
  place! : string;
  relation! : string;
  userId! : null;

}


export class Doctors{

  availability! : string
  dob! : string
  doctorId! : string
  doctorPhoneNumber! : string
  experience! : string
  firstName! : string
  gender! : string
  id! : string
  lastName! : string
  qualification! : string
  rating! : string
  userId!:null
}

export class ConsultationDetails{

  appointmentId!:string
  consultationFee!:string
  consultationMode!:string
  date!:string
  diagnosis!:string
  doctorId!:string
  doctors!:Doctors
  labTest!:string
  medications!:string
  patientId!:string
  patients!:null
  radiology!:string
  remarks!:string
  session!:string
  status!:string

}