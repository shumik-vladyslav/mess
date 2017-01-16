import {Component, OnInit, ElementRef, Pipe} from '@angular/core';
declare var $: any;
@Component({
  selector: 'left-menu',
  styleUrls: ['./menu.component.sass'],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  constructor(private _elRef: ElementRef){};


}
