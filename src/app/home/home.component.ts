import {Component, OnInit, ElementRef, Pipe} from '@angular/core';
declare var $: any;
@Component({
  selector: 'home',
  styleUrls: ['./home.component.sass'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private _elRef: ElementRef){};

  ngOnInit(){
      $('.dropmenu1').click(function () {
        $('.dropclick1').toggleClass('active');
        $('.dropmenu1 i').toggleClass('rotate');

      })
    $('.dropmenu2').click(function () {
      $('.dropclick2').toggleClass('active');
      $('.dropmenu2 i').toggleClass('rotate');

    })
  }
}
