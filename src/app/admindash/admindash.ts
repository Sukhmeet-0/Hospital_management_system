import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.html',
  styleUrls: ['./admindash.css']
})
export class Admindash implements OnInit{
  patients:Patient[]=[];
  constructor(private patientService:PatientService, private cd:ChangeDetectorRef){

  }
  ngOnInit():void{
    this.getPatient();
  }
  getPatient(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients = data;
      this.cd.detectChanges();
      console.log(data);console.log('Patients:', this.patients);
    })
  }
}
