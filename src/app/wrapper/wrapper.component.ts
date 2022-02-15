import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  isExpanded: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
