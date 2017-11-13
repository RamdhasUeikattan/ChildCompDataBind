import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './app.dataservice';
import { Http } from '@angular/http';

/**
 * j-nord- github issue#7
 */
@Component({
    selector: 'my-app',
    template: `Find Customer:<input type='text' [(ngModel)]='filterValue' placeholder='CustomerID'/>
    <button (click)='onClick($event)'>Search</button>
    <my-grid [mySource]= 'orderData'></my-grid> `
})
export class AppComponent implements OnInit {
    public orderData: Object[];
    @ViewChild('grid')
    public grid;
    public filterValue: string;
    public dataService;
    public http: Http;
    constructor(service: DataService) {
        this.dataService = service;
    }

    ngOnInit(): void {
        this.orderData = [];
        this.filterValue = '';
    }

    onClick(): void {
        this.dataService.get('Orders', 'CustomerID', this.filterValue).subscribe(result => {
            this.orderData =result.d;
        });
    }
}
