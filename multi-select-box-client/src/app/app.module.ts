import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiSelectBoxCommonComponent } from './components/multi-select-box-common/multi-select-box-common.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectBoxCommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
