import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Column  } from '@syncfusion/ej2-ng-grids';

/**
 * j-nord- github issue#7
 */
@Component({
    selector: 'my-grid',
    template: `<ej-grid #grid [locale]='de-DE' [columns]='mycolumns' [dataSource]='mySource' >
                </ej-grid> `
})
export class GridComponent implements OnInit {
    @ViewChild('grid')
    public grid;
    private _columns: Column[];

    @Input() mySource: Object[];

    @Input()
     set mycolumns(columns: Column[]) {
       this._columns = <Column[]>columns;
     }
     get mycolumns(): Column[] { return this._columns; }

    ngOnInit(){
         //
    }
}