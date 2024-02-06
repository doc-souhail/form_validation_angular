import { ReservationBookService } from './../reservation/reservation-book.service';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  constructor(private reservationService: ReservationBookService){}

  books : Reservation[] = [];

  ngOnInit(): void {
    this.books = this.reservationService.getReservationBooks();
  }

  deleteReservationBook(id: string): void{
    this.reservationService.deleteReservationBook(id);
  }

}
