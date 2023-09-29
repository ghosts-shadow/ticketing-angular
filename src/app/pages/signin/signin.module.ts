import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes : Routes =[
  {
    path:'',
    component: SigninComponent
  }
]

const modules = [
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatInputModule
];

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    modules
  ]
})
export class SigninModule { }
