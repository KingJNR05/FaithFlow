import { Routes } from "@angular/router";
import { HomeComponent } from "./src/app/home-component/home.component";
import { PrayerRequstsListComponent } from "./src/app/prayer-requsts-list/prayer-requsts-list.component";
import { DevotionalCardComponentComponent } from "./src/app/devotional-card-component/devotional-card-component.component";

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'prayerRequests', component: PrayerRequstsListComponent},
    {path:'devotionals', component: DevotionalCardComponentComponent}
]