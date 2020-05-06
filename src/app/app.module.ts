import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFieldDirective } from "../../components/dynamic-field/dynamic-field.component";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";


import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,DynamicFieldDirective,DynamicFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
