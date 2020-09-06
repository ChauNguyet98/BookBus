import { Component, OnInit, ViewChild } from '@angular/core';
import { ListSeatComponent } from '../list-seat/list-seat.component';

@Component({
  selector: 'app-manage-seat',
  templateUrl: './manage-seat.component.html',
  styleUrls: ['./manage-seat.component.css']
})
export class ManageSeatComponent implements OnInit {

  @ViewChild(ListSeatComponent) myChild: ListSeatComponent;

  arrSeatBooks = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  // onAddSeat() {
  //   for (var i=0; i < this.myChild.arrSeats.length; i++)
  //   {
  //     if (this.myChild.arrSeats[i].TrangThai === true)
  //     {
  //       this.arrSeatBooks.push(this.myChild.arrSeats[i]);
  //     }
  //   }
  // }

  onPushSeat(value: number) {
    this.arrSeatBooks.push(value);
    console.log(this.arrSeatBooks);
  }


}
