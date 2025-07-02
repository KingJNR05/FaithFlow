import { Injectable, signal } from "@angular/core";
import { PrayerRequest } from "./PrayerRequest";
@Injectable({
    providedIn:"root"
})
export class PrayerRequestsService{

    //   prayerRequests : PrayerRequest[] = [];

   prayerRequests = signal<PrayerRequest[]>([])

   addPrayerRequest(newRequest: PrayerRequest){
    this.prayerRequests.update((oldRequests)=> [...oldRequests, newRequest])
   }

   getPrayerRequests(){
    return this.prayerRequests;
   }

}