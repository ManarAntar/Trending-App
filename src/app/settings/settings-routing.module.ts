import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:ProfileComponent},
  {path:'profile',component:ProfileComponent},
  {path:'privacy',component:PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
