import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss'],
    animations: [
  trigger('openClose', [
    // ...
    state('open', style({
      opacity: 1,
    })),
    state('closed', style({
      opacity: 0,
    })),
  ]),
],
})
export class AlarmComponent implements OnInit {
  visibility_status:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  close(): void {
	this.visibility_status = false;
  }
}
