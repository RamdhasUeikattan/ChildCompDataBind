import { Component, OnInit, ViewChild } from '@angular/core';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { DataService } from './app.dataservice';
import { Http } from '@angular/http';

/**
 * n-nord- github issue#7
 */
const SERVICE_URI = 'http://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';
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


// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ItemModel } from '@syncfusion/ej2-navigations';
// import { gridData1 } from './data';
// import { ToolbarItems, IEditCell, Column, SaveEventArgs } from '@syncfusion/ej2-ng-grids';
// import { DropDownList } from '@syncfusion/ej2-dropdowns';
// import { DataManager, Query } from '@syncfusion/ej2-data';

// @Component({
//     selector: 'my-app',
//     template: ` <form><ej-grid #grid [dataSource]='data' [allowFiltering]='true' [editSettings]='editSetting' 
//     (dataBound)='dataBoundHandler()' [toolbar]='toolbarItems' (toolbarClick)='tClick($event)'
//     (actionBegin)='actionBeginHandler($event)' (actionComplete)='actionCompleteHandler($event)'>
//                 <e-columns>
//                 <e-column field='OrderID' headerText='Order ID' width='120' textAlign="right" isPrimaryKey='true' [validationRules]='validationRules'></e-column>
//                 <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='validationRules'></e-column>
//                 <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="right" editType='numericedit' [validationRules]='validationRules'></e-column>
//                 <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
//                 <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
//                 </e-columns>
//                 </ej-grid> </form>

//                 <ng-template #template>
//                   <span>DataCount - {{dataCount}}</span>
//                 </ng-template>
//                 <ng-template #template1>
//                 <button type='button'>Print</button>
//               </ng-template>`
// })
// export class AppComponent implements OnInit {

//     public data: Object[];

//     @ViewChild('grid')
//     public grid;
//     public editSetting: Object;
//     public validationRules;

//     public dataCount;
//     public focusindex;

//     ngOnInit(): void {
//         this.data = gridData1;
//         this.validationRules = { required: true };
//         this.editSetting = { allowEditing: true, allowDeleting: true, allowAdding: true };
//     }

//     // Find the index of cliked td.
//     actionBeginHandler(args) {
//         if (args.requestType === 'beginEdit') {
//             this.focusindex = (<any>document.activeElement).cellIndex;
//         }
//     }
//     // focusing the clicked cell
//     actionCompleteHandler(args) {
//         if (args.requestType === 'beginEdit') {
//             // you can use focus or select
//             // * focus - focusing the clicked cell.
//             // * select - focusing the clicked cell and select the content.
//             args.row.querySelector('#' + this.grid.element.id + this.grid.getVisibleColumns()[this.focusindex].field).select();
//         }
//     }

//     // dataBoundHandler() {
//     //     // update data count
//     //     this.dataCount = this.grid.currentViewData.length;
//     // }
// }

// import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
// import { IEditCell, Column } from '@syncfusion/ej2-ng-grids';
// import { DropDownList } from '@syncfusion/ej2-dropdowns';
// import { DataManager, Query } from '@syncfusion/ej2-data';

// @Component({
//     selector: 'my-app',
//     template: ` <button (click)='onClick()'>Destroy Grid</button>
//     <form *ngIf='bool'><ej-grid #grid id='editgrid' [dataSource]='data'[editSettings]='editSetting'
//                 (actionBegin)='actionBeginHandler($event)' (actionComplete)='actionCompleteHandler($event)'>
//                 <e-columns>
//                     <e-column field='No' [isPrimaryKey]='true' [visible]='false'></e-column>
//                     <e-column field='Cityid' headerText='City ID' width=120 [valueAccessor]='formatter' [edit]='customEditCell'></e-column>
//                     <e-column field='Country' headerText='Country' width=120 ></e-column>
//                 </e-columns>
//                 </ej-grid> </form>`
// })
// export class AppComponent implements OnInit, OnDestroy {

//     @ViewChild('grid')
//     public grid;
//     public editSetting: Object;
//     public customEditCell: IEditCell;
//     public dropdownObj: DropDownList;
//     public focusIndex: number;
//     bool = true;

//     // Grid data Source 
//     public data: Object[] = [{ No: 1, Cityid: 1, Country: 'India' }, { No: 2, Cityid: 2, Country: 'India' },
//     { No: 3, Cityid: 3, Country: 'India' }, { No: 4, Cityid: 4, Country: 'India' }, { No: 5, Cityid: 5, Country: 'India' }];

//     // dropdown datasource
//     public dropDownDs = [{ ShipCity: 'mumbai', CityID: 1 }, { ShipCity: 'chennai', CityID: 2 },
//     { ShipCity: 'Pune', CityID: 3 }, { ShipCity: 'Delhi', CityID: 4 }, { ShipCity: 'Kolkatta', CityID: 5 }];

//     ngOnInit(): void {
//         this.editSetting = { allowEditing: true, allowDeleting: true, allowAdding: true };
//         this.customEditCell = { read: this.read.bind(this), write: this.write.bind(this), destroy: this.destroy.bind(this) };
//     }

//     ngOnDestroy(){
//         debugger;
//     }

//     // format/change the grid cell value using the formatter function.
//     public formatter = (field, data) => {
//         return this.getvalue(data);
//     }

//     // Find the disply value from the id of city
//     private getvalue(data: any) {
//         let dm: DataManager = new DataManager(this.dropDownDs as any);
//         let query: Query = new Query();
//         query.where('CityID', 'equal', data.Cityid);
//         let result: Object[] = dm.executeLocal(query);
//         return result[0]['ShipCity'];
//     }


//     // destroy the syncfusion component using `destroy` method.
//     onClick() {
//         this.bool = false;
//         debugger;
//         //this.grid.destroy();
//     }

//     // create custom edit cell element
//     create(){
//         let div = document.createElement('input');
//         return div;
//     }
//     // read the edited value to save dataSource.
//     read(args) {
//         // the returned value is updated in dataSource with column.field property.
//         return this.dropdownObj.value;
//     }
//     // create Custom Edit cell.
//     write(args: { rowData: Object, element: Element, column: Column, requestType: string }) {
//         this.dropdownObj = new DropDownList(
//             {
//                 dataSource: new DataManager(<any>this.dropDownDs),
//                 text: this.getvalue(args.rowData), popupHeight: '200px',
//                 fields: {text: 'ShipCity', value: 'CityID'}
//             });
//         this.dropdownObj.appendTo(args.element as HTMLElement);
//     }
//     // destroy the drop down component.
//     destroy() {
//         this.dropdownObj.destroy();
//     }



//     // below functions used for focus the clicked cell.
//     // find the index of cliked td.
//     actionBeginHandler(args: any) {
//         if (args.requestType as string === 'beginEdit') {
//             this.focusIndex = (<any>document.activeElement).cellIndex;
//         }
//     }

//     // focusing the clicked cell
//     actionCompleteHandler(args: any) {
//         if (args.requestType as string === 'beginEdit') {
//             // you can use focus or select
//             // * focus - focusing the clicked cell.
//             // * select - focusing the clicked cell and select the content.
//             // here
//             // args.row -- Current edited row element
//             // "this.grid.element.id + this.grid.columns[this.focusIndex].field" -- is id of the clicked cell
//             args.row.querySelector('#' + this.grid.element.id + this.grid.columns[this.focusIndex].field).select();
//         }
//     }
// }
