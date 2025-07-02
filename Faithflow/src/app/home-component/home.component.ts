import { Component } from '@angular/core';
import { DevotionalCardComponentComponent } from '../devotional-card-component/devotional-card-component.component';
import { PrayerRequstsListComponent } from '../prayer-requsts-list/prayer-requsts-list.component';


@Component({
  selector: 'app-home-component',
  imports: [DevotionalCardComponentComponent,PrayerRequstsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isDevotion = false
  isPrayerReq = false

  PrayerReqClicked() {
     this.isPrayerReq = true;
    return this.isPrayerReq;
  }

  devotionalClicked() {
      this.isDevotion = true;
      return this.isDevotion
  }

}
