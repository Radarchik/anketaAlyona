import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-end',
  templateUrl: './page-end.component.html',
  styleUrls: ['./page-end.component.css']
})
export class PageEndComponent implements OnInit {
  @Output() pageToShowEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
