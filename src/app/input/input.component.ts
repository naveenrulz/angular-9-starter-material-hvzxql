import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../field.interface";
@Component({
  selector: "app-input",
  template: `<h1>Input</h1>
`,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
