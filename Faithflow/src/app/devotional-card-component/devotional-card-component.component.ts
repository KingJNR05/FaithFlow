import { Component, inject, input, Input } from '@angular/core';
import { DevotionalService } from '../devotionalService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-devotional-card-component',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './devotional-card-component.component.html',
  styleUrl: './devotional-card-component.component.css'
})
export class DevotionalCardComponentComponent {
HomeClicked() {
throw new Error('Method not implemented.');
}

  devotionalClicked() {
    throw new Error('Method not implemented.');
  }

  PrayerReqClicked() {
    throw new Error('Method not implemented.');
  }

  devotionalService = inject(DevotionalService)

  // @Input({required:true}) isClicked !: boolean

  isClicked = input<boolean>()


}
