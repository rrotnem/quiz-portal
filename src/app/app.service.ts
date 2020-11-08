import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Data} from "./data.model";

@Injectable()
export class TestService{

    constructor(private httpClient: HttpClient){}
    sayHello():string{
        return "Welcome to Customer Service with DI"
    }
    loadData():Observable<Data[]>{
        return this.httpClient.get<Data[]>("http://localhost:3000/bootstrap");

    }
}

