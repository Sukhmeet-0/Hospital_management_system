import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Patient } from "./patient";

@Injectable({
    providedIn:'root'
})
export class PatientService{
    constructor(private HttpClient:HttpClient){}
    private baseUrl = "http://localhost:8080/api/v1"
    getPatientList():Observable<Patient[]>{
        return this.HttpClient.get<Patient[]>(`${this.baseUrl}`);
    }
}