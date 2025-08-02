import { PatientService } from './../patient.service';
import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-patient',
  standalone: false,
  templateUrl: './create-patient.html',
  styleUrl: './create-patient.css'
})
export class CreatePatient {
  patient:Patient = new Patient;

  constructor(private patientService:PatientService, private router:Router, ){}
  saveAppointment(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
    });
  }

  onSubmit(){
    this.saveAppointment();
    this.goToAdmin();
  }
  goToAdmin(){
    this.router.navigate(['/admin'],{ queryParams: { refresh: new Date().getTime() } });
  }

}
