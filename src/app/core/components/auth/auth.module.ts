import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routing
import { AuthRoutingModule } from './auth-routing.module';

//Components
import { SignComponent } from './pages/sign/sign.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    SignComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
