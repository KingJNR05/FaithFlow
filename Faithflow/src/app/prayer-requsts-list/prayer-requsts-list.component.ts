import { Component, inject, input, signal } from '@angular/core';
import { PrayerReqFormComponentComponent } from '../prayer-req-form-component/prayer-req-form-component.component';
import { PrayerRequestsService } from '../PrayerRequestsService';

@Component({
  selector: 'app-prayer-requsts-list',
  imports: [PrayerReqFormComponentComponent],
  templateUrl: './prayer-requsts-list.component.html',
  styleUrl: './prayer-requsts-list.component.css'
})
export class PrayerRequstsListComponent {


  prayerRequestsService = inject(PrayerRequestsService)


  clearPrayerRequests() {
    this.prayerRequestsService.clearPrayerRequests()
  }

  isClicked = input.required<boolean>()

 
  isModalOn = signal<boolean>(false)

  setModal(isOn: boolean){
      this.isModalOn.set(isOn)
  }

addNew() {
  this.isModalOn.set(true)
 
}

prayerRequests = this.prayerRequestsService.getPrayerRequests()

deletePrayerRequest(id:string){
  this.prayerRequestsService.deletePrayerRequest(id)
  
}

  // prayerRequests : PrayerRequest[] = [];
  // addPrayerRequest(prayerRequest:PrayerRequest){
  //   this.prayerRequests.push(prayerRequest);
  // }

 

  
 

 


}
