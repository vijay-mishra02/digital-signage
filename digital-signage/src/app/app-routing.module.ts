import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrousalComponent } from './carrousal/carrousal.component';
import { ConfigComponent } from './config/config.component';
import { FormHolderComponent } from './form-holder/form-holder.component';
import { UploadsComponent } from './uploads/uploads/uploads.component';

const routes: Routes = [
  { path: 'form', component: FormHolderComponent },
  { path: 'carousel', component: CarrousalComponent },
  { path: 'uploads', component: UploadsComponent },
  { path: 'config', component: ConfigComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
