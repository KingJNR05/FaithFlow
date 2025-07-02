import { Component, inject, input, signal } from '@angular/core';
import { PrayerRequest } from '../PrayerRequest';
import { PrayerReqFormComponentComponent } from '../prayer-req-form-component/prayer-req-form-component.component';
import { PrayerRequestsService } from '../PrayerRequestsService';
@Component({
  selector: 'app-prayer-requsts-list',
  imports: [PrayerReqFormComponentComponent],
  templateUrl: './prayer-requsts-list.component.html',
  styleUrl: './prayer-requsts-list.component.css'
})
export class PrayerRequstsListComponent {

  isClicked = input.required<boolean>()

 
  isModalOn = signal<boolean>(false)

  setModal(isOn: boolean){
      this.isModalOn.set(isOn)
  }

addNew() {
  this.isModalOn.set(true)
 
}

  // prayerRequests : PrayerRequest[] = [];




  // addPrayerRequest(prayerRequest:PrayerRequest){
  //   this.prayerRequests.push(prayerRequest);
  // }

  prayerRequestsService = inject(PrayerRequestsService)

  prayerRequests = this.prayerRequestsService.getPrayerRequests()


}
