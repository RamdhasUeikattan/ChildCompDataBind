import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  GridModule, SelectionService, PageService, SortService, FilterService,
  ToolbarService, EditService, GridAllModule
} from '@syncfusion/ej2-ng-grids';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { AppComponent } from './app.component';
import { GridComponent } from './grid.component';
import { DataService } from './app.dataservice';
import { HttpModule, Http } from '@angular/http';

@NgModule({
  imports: [BrowserModule, GridModule, ButtonModule,GridAllModule, FormsModule, HttpModule],
  declarations: [AppComponent, GridComponent],
  bootstrap: [AppComponent],
  providers: [ DataService]
})
export class AppModule { }
