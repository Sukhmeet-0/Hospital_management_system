import { Component, ChangeDetectorRef } from '@angular/core';
import { Medicine } from '../medicines';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-list',
  standalone: false,
  templateUrl: './medicine-list.html',
  styleUrl: './medicine-list.css'
})
export class MedicineList {
  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService,private cd:ChangeDetectorRef){}

  ngOnInit(){
    this.getMedicine();
    // this.cd.detectChanges();
  }

  getMedicine(){
    this.medicineService.getMedicines().subscribe(data=>{
      this.medicines = data;
      console.log(data);
      this.cd.detectChanges();
    })
  }
  delete(id:number){
    this.medicineService.deleteMedicine(id).subscribe(data=>{
      console.log(data);
      this.getMedicine();
    })
  }
}
