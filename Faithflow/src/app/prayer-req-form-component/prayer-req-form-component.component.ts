import { Component, EventEmitter, inject, input, Output, signal, ViewChild,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrayerRequestsService } from '../PrayerRequestsService';

import { PrayerRequest } from '../PrayerRequest';

@Component({
  selector: 'app-prayer-req-form-component',
  imports: [FormsModule],
  templateUrl: './prayer-req-form-component.component.html',
  styleUrl: './prayer-req-form-component.component.css'
})

export class PrayerReqFormComponentComponent {
 

  @Output() close = new EventEmitter<boolean>()
  
  closeModal() {
    this.close.emit(false)
  }

  prayerRequestsService = inject(PrayerRequestsService)

  prayerRequest !: string;
  date!: string;

 
  // @Output() getRequest = new EventEmitter<PrayerRequest>()

  onSubmit() {
    this.close.emit(false)
  this.prayerRequestsService.addPrayerRequest({id: Math.random().toString(), prayer: this.prayerRequest, date:this.date})

    // this.getRequest.emit({
    //   id: Math.random().toString(),
    //   prayer: this.prayerRequest,
    //   date: this.date
    // })
  
  }
}
