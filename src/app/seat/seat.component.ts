import { Component, OnInit, Input } from '@angular/core';
import { ListSeatComponent } from '../list-seat/list-seat.component';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  @Input() SoGhe: number;
  @Input() TrangThai: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
