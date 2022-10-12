import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LightgalleryModule } from 'lightgallery/angular';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [MatButtonModule, MatToolbarModule],
})
export class MaterialModule {}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrousalComponent,
    FormHolderComponent,
    ConfigComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UploadsModule,
    FontAwesomeModule,
    HttpClientModule,
    PdfViewerModule,
    LightgalleryModule,
    LightboxModule.withConfig({
      panelClass: 'fullscreen'
    }),
    BrowserAnimationsModule,
    GalleryModule.withConfig({
      autoPlay: true,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
