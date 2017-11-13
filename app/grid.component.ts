import { Component, OnInit, ViewChild, Input } from '@angular/core';

/**
 * j-nord- github issue#7
 */
@Component({
    selector: 'my-grid',
    template: ` <ej-grid #grid [locale]='de-DE' [dataSource]='mySource'>
                <e-columns>
                    <e-column field='CustomerID' headerText='Customer ID' width=150 ></e-column>
                    <e-column field='Freight' headerText='Freight' [format]='form' textAlign='right' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ej-grid> `
})
export class GridComponent implements OnInit {
    @ViewChild('grid')
    public grid;
    @Input() mySource: any;
    ngOnInit(){
        //
    }
}