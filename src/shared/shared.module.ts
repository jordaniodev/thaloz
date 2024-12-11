import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users/users.service';



@NgModule({
  declarations: [],
  providers: [UsersService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
