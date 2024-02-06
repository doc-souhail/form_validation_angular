import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationBookService {

  constructor(){
    let savedReservation = localStorage.getItem("books")
    this.reservationBooks = savedReservation? JSON.parse(savedReservation): [];
  }


  private reservationBooks: Reservation[] = [];


  // CRUD OPREATIONS 

  // READ 
  getReservationBooks(): Reservation[]{
    return this.reservationBooks
  }

  getReservationId(id: string): Reservation | undefined{
    return this.reservationBooks.find(res => res.id == id);
  }

  // ADD 
  addReservationBooks(book: Reservation): void{
    book.id = Date.now().toString();
    this.reservationBooks.push(book);
    localStorage.setItem("books", JSON.stringify(this.reservationBooks))
  }


  //DELETE
  deleteReservationBook(id: string): void{
    let index = this.reservationBooks.findIndex(res => res.id == id);
    this.reservationBooks.splice(index,1);
    localStorage.setItem("books", JSON.stringify(this.reservationBooks))
  }

    //UPDATE
    updateReservation(id: string, updateReservation: Reservation): void{
      let index = this.reservationBooks.findIndex(res => res.id === id);
      this.reservationBooks[index] = updateReservation;
      updateReservation.id = id;
      localStorage.setItem("books", JSON.stringify(this.reservationBooks))
    }


}
