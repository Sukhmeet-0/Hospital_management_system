import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {AppointmentService} from "../appointment.service"
import { Appointments } from '../appointments';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.html',
  styleUrl: './appointment.css'
})
export class Appointment implements OnInit {
  appointments:Appointments[]=[];
  constructor(private appointmentService:AppointmentService, private cd:ChangeDetectorRef){

  }
  ngOnInit():void{
    this.getAppointements();
  }
  getAppointements(){
    this.appointmentService.getAllAppointment().subscribe(data=>{
      this.appointments = data;
      this.cd.detectChanges();
      console.log('Appointments:', data);
    })
  }
}
