import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Column } from '@syncfusion/ej2-grids';

/**
 * j-nord- github issue#7
 */
@Component({
    selector: 'my-grid',
    template: ` <ej-grid #grid [locale]='de-DE' [dataSource]='mySource' [columns]='columns'>
                </ej-grid> `
})
export class GridComponent implements OnInit {
    @ViewChild('grid')
    public grid;
    @Input() mySource: any;

    public columns: Column[];

    ngOnInit(){
        this.columns = <Column[]> [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'right', width: 120, format: 'C2' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 140 }
        ];
    }
}