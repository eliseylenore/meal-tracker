import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { foodListComponent } from './food-list.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,  foodListComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
