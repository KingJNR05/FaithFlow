import { Component } from '@angular/core';
import { DevotionalCardComponentComponent } from '../devotional-card-component/devotional-card-component.component';
import { PrayerRequstsListComponent } from '../prayer-requsts-list/prayer-requsts-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}
