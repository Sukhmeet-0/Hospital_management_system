import { CreateAppointment } from './create-appointment/create-appointment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Appointments} from "./appointments";

@Injectable({
    providedIn:'root'
})
export class AppointmentService{
    constructor(private HttpClient:HttpClient){}
    private baseUrl = "http://localhost:8080/api/v2"
    getAllAppointment():Observable<Appointments[]>{
        return this.HttpClient.get<Appointments[]>(`${this.baseUrl}`);
    }
    createAppointment(appointment:Appointments):Observable<Appointments>{
        return this.HttpClient.post<Appointments>(`${this.baseUrl}`,appointment);
    }
    deleteAppointment(id:number):Observable<object>{
        return this.HttpClient.delete(`${this.baseUrl}/appointments/${id}`);
    }
}