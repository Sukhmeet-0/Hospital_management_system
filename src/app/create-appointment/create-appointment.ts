import { AppointmentService } from './../appointment.service';
import { Component } from '@angular/core';
import { Appointments } from '../appointments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.html',
  styleUrl: './create-appointment.css'
})
export class CreateAppointment {
  appointment:Appointments = new Appointments;

  constructor(private appointmentService:AppointmentService, private router:Router, ){}
  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
    });
  }

  onSubmit(){
    this.saveAppointment();
    this.goToAppointmentList();
  }
  goToAppointmentList(){
    this.router.navigate(['/appointmentlist'],{ queryParams: { refresh: new Date().getTime() } });
  }
}
