import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Data} from "./data.model";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  isStart:boolean;
  

  constructor() { }
  change():boolean{
    console.log("something happened")
    return  true;

  }
}
