import { Injectable } from "@angular/core";
import { DEVOTIONALS } from "./devotionals";

@Injectable({
    providedIn:"root"
})

export class DevotionalService{

    getDevotional(){
       return DEVOTIONALS[Math.floor(Math.random()*3)]
    }

}