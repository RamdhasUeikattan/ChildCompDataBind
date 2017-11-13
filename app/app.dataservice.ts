import { Inject } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';

export class DataService {
    private SERVICE_URI = 'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/';
    constructor(@Inject(Http)private http: Http){

    }

    public get(table: string,field: string, val: string): Observable<Object> {
    return this.http.get(`${this.SERVICE_URI}${table}/?count=true&$top=12&$filter=${field} eq '${val}'`)
    .map((res) => res.json());
    }
}