import { Routes } from '@angular/router';
import { HomeComponent } from './compo/Index/home.component';
import { RegisterComponent } from './compo/register/register.component';
import { AadhercardpageComponent } from './compo/aadhercardpage/aadhercardpage.component';
import { AdminmainpageComponent } from './compo/adminmainpage/adminmainpage.component';

export const routes: Routes = [

      {path: "login", component:HomeComponent},
      {path:"register", component:RegisterComponent},
      {path:"aadhercardpage", component:AadhercardpageComponent},
      {path:"adminmainpage", component:AdminmainpageComponent},
      {path:"**", redirectTo:"login"}
];
