import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  isExpanded: boolean = false;

  component_name: string = 'notes';
  constructor() { }

  ngOnInit(): void {
  }
  Call(componentName: string)
  {
    this.component_name = componentName;
  }

}
