import { MedicineService } from './../medicine.service';
import { Component } from '@angular/core';
import { Medicine } from '../medicines';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  templateUrl: './create-medicine.html',
  styleUrl: './create-medicine.css'
})
export class CreateMedicine {
  medicines:Medicine=new Medicine;
  constructor(private medicineService:MedicineService, private router:Router){}
  saveMedicine(){
    this.medicineService.createMedicine(this.medicines).subscribe(data=>{
      console.log(this.medicines);
    })
  }
  onSubmit(){
    this.saveMedicine();
    this.goToMedicineList();
  }
  goToMedicineList(){
    this.router.navigate(['/view-medicine'],{ queryParams: { refresh: new Date().getTime() } });
  }
}
