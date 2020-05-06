import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFieldDirective } from "./dynamic-field/dynamic-field.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent,DynamicFieldDirective,DynamicFormComponent,InputComponent,
    ButtonComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
  ]
})
export class AppModule { }
