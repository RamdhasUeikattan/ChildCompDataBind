import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './app.dataservice';
import {ColumnModel, GridComponent} from '@syncfusion/ej2-ng-grids';
/**
 * j-nord- github issue#7
 * Find Customer:<input type='text' [(ngModel)]='filterValue' placeholder='CustomerID'/>
 */
@Component({
    selector: 'my-app',
    template: `    
    <select (change)="onChange($event.target.value)">
        <option value='Orders'>OrderTable</option>
        <option value='Products'>ProductTable</option>
    </select>

    <my-grid [mySource]= 'orderData' [mycolumns]='myColumns'></my-grid> `
})
export class AppComponent implements OnInit {
    public orderData: Object[];

    @ViewChild('grid')
    public grid: GridComponent;

    public dataService;

    public myColumns: ColumnModel[];

    public columns = {Orders: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 }
    ], Products: [
        { field: 'ProductID', headerText: 'Product ID', width: 130, textAlign: 'right' },
        { field: 'ProductName', headerText: 'Product Name', width: 170 },
        { field: 'UnitPrice', headerText: 'Unit Price', width: 135, textAlign: 'right', format: 'C2', },
        { field: 'UnitsInStock', headerText: 'Units In Stock', width: 160, textAlign: 'right' }] }
    constructor(service: DataService) {
        this.dataService = service;
    }

    onChange(args: string): void {
        this.myColumns = this.columns[args];
        this.orderData = [];
        this.getData(args);
    }

    ngOnInit(): void {
        this.myColumns = this.columns['Orders'];
        this.getData('Orders');
    }

    getData(tableName: string) {
        this.dataService.get(tableName).subscribe(result => {
            this.orderData =result.d;
        });
    }
}
