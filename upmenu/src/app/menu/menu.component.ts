import { Component, 
OnInit, 
ElementRef, 
TemplateRef, 
ViewContainerRef,
AfterViewInit,  
ViewChild, 
Renderer2,
Directive, 
Input 
} from '@angular/core';

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

import { AlarmComponent } from '../alarm/alarm.component';
/*
@Component({
selector: 'app-alarm',
  templateUrl: '../alarm/alarm.component.html',
  styleUrls: ['../alarm/alarm.component.scss'],
})
export class alarm implements OnInit,AfterViewInit {
	id: string ="al1";
	    ngOnInit(): void {
			console.log('al1',this);
    }
  //@Input() id!: string;
  	  ngAfterViewInit() {
		//console.log(this.el1);
		console.log('al1',this);
    // child is set
  }
}
*/
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
  trigger('openClose', [
    // ...
    state('open', style({
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      opacity: 0,
      backgroundColor: 'blue'
    })),
    transition('* => closed', [
animate('1s', keyframes([
    style({ backgroundColor: 'white', offset: 0}),
    style({ backgroundColor: '#FFFFE0', offset: 0.2}),
    style({ backgroundColor: 'yellow', offset: 0.5})
  ]))
    ]),
    transition('* => open', [
animate('1s', keyframes([
    style({ backgroundColor: 'yellow', offset: 0}),
    style({ backgroundColor: '#FFFFE0', offset: 0.2}),
    style({ backgroundColor: 'white', offset: 0.5})
  ]))
    ]),
  ]),
],
})

export class MenuComponent implements OnInit,AfterViewInit {
@ViewChild(AlarmComponent) child?: AlarmComponent;// el1:ElementRef;
 /*set alert(v: al1) {
    setTimeout(() => {
		console.log(this);
      //this.selectedPane = v.id;
    }, 0);
  }
   selectedPane: string = '';
  shouldShow = true;
  toggle() {
    this.shouldShow = !this.shouldShow;
  }
  */
//el1:ElementRef;
dropdown_clicked:boolean = false;
    b2:string = 'login';
    t10:string = 'name';
    t2:string = 'email';
    t3:string = 'text';
    btn1:string = 'ok';
    btn2:string = 'cancel';
    //constructor(private rd: Renderer2) {
		//console.log(rd);
		
	//}
	constructor (private _elementRef : ElementRef) {
	 this.child = this._elementRef.nativeElement.querySelector('al1');
	 console.log(this.child);
	 }
    ngOnInit(): void {
    }
	onSave():boolean{
		if (this.dropdown_clicked) 
			this.dropdown_clicked = false;
		else
			this.dropdown_clicked = true;
		return this.dropdown_clicked;
	}
	onAnimationEvent(event: AnimationEvent) {
		console.log('AnimationEvent',event);
    }
    onLogin():boolean{
      console.log(this.child);
      if (this.child) 
      	this.child.close();
      //this.el1.nativeElement.focus();      //<<<=====same as oldest way
	  //this.el1.nativeElement.close().subscribe(() => {});
	  //this.child.nativeElement.focus();//close().subscribe(() => {});
	  return true;
	}
	
	  ngAfterViewInit() {
		//console.log(this.el1);
		console.log('al1 in MenuComponent',this);
    // child is set
  }
}    