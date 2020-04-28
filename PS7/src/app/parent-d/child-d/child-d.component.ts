import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-d',
  template: '<li>{{quote}}</li>',
  styleUrls: ['./child-d.component.css']
})
export class ChildDComponent implements OnInit {

  @Input() quote: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
