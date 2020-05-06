import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../field.interface";
@Component({
  selector: "app-button",
  template: `<h1>Button</h1>`,
  styles: []
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
