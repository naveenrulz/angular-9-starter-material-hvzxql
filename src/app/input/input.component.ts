import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../field.interface";
@Component({
  selector: "app-input",
  template: `
  <div [formGroup]="group">
  <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
  </div>
`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
