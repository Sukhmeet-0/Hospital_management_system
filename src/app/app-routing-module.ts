import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admindash } from './admindash/admindash';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { CreatePatient } from './create-patient/create-patient';
import { Home } from './home/home';

const routes: Routes = [
  {path:'admin',component:Admindash},
  {path:'appointmentlist',component:Appointment},
  {path:'create-appointment',component:CreateAppointment},
  {path:'create-patient',component:CreatePatient},
  {path:'home',component:Home},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
