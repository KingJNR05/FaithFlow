import { Component } from '@angular/core';
import { HomeComponent } from './home-component/home.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Faithflow';
}
