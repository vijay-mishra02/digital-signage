import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrousalComponent } from './carrousal/carrousal.component';
import { FormHolderComponent } from './form-holder/form-holder.component';
import { UploadsModule } from './uploads/uploads.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigComponent } from './config/config.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrousalComponent,
    FormHolderComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UploadsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
