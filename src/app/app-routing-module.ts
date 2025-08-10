import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admindash } from './admindash/admindash';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { CreatePatient } from './create-patient/create-patient';
import { Home } from './home/home';
import { Docdash } from './docdash/docdash';
import { MedicineList } from './medicine-list/medicine-list';
import { CreateMedicine } from './create-medicine/create-medicine';
import { UpdatePatient } from './update-patient/update-patient';

const routes: Routes = [
  {path:'admin',component:Admindash},
  {path:'appointmentlist',component:Appointment},
  {path:'create-appointment',component:CreateAppointment},
  {path:'create-patient',component:CreatePatient},
  {path:'home',component:Home},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"docdash",component:Docdash},
  {path:"view-medicine",component:MedicineList},
  {path:"create-medicine",component:CreateMedicine},
  {path:"update-patient/:id",component:UpdatePatient}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
