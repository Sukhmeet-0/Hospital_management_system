import { PatientService } from './../patient.service';
import { Component } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.html',
  styleUrl: './update-patient.css'
})
export class UpdatePatient {
  patients:Patient = new Patient;
  constructor(private patientService:PatientService){}
  ngOnInit(){
    this.onSubmit();
  }
  onSubmit(){
    
  }
}
