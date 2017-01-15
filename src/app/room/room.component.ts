import {Component, OnInit, ElementRef, Pipe} from '@angular/core';
declare var $: any;
@Component({
  selector: 'room',
  styleUrls: ['./room.component.sass'],
  templateUrl: './room.component.html'
})
export class RoomComponent implements OnInit {
  constructor(private _elRef: ElementRef){};

  ngOnInit(){
    $( function() {
      $( ".datepick" ).datepicker();
    } );
  }
}
