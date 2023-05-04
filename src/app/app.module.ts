

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryService } from './service/delivery.service';


@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DeliveryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
