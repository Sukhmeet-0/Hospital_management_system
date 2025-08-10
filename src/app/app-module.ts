import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Admindash } from './admindash/admindash';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { FormsModule } from '@angular/forms';
import { CreatePatient } from './create-patient/create-patient';
import { Home } from './home/home';
import { Docdash } from './docdash/docdash';
import { MedicineList } from './medicine-list/medicine-list';
import { CreateMedicine } from './create-medicine/create-medicine';
import { UpdatePatient } from './update-patient/update-patient';


@NgModule({
  declarations: [
   
    App,
    Admindash,
    Appointment,
    CreateAppointment,
    CreatePatient,
    Home,
    Docdash,
    MedicineList,
    CreateMedicine,
    UpdatePatient,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
