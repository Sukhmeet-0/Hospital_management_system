import { PatientService } from './../patient.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.html',
  styleUrl: './docdash.css'
})
export class Docdash {
  constructor(private patientService:PatientService,private cd:ChangeDetectorRef){}
  patients:Patient[]=[];
  ngOnInit():void{
    this.getPatient();

  }
  getPatient(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients= data;
      this.cd.detectChanges();
    })
  }
}
