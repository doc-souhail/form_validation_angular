import { Reservation } from './../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ReservationBookService } from '../reservation/reservation-book.service';



@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationBook: FormGroup = new FormGroup({});
  showSuccessMessage: boolean = false;

  constructor(private FormBuilder: FormBuilder, private reservationBookService: ReservationBookService, private activateRoute: ActivatedRoute, private router : Router ){}

  ngOnInit(): void {
    this.reservationBook = this.FormBuilder.group({
      fullName: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      bookName: ['',Validators.required],
      bookSIREN: ['',Validators.required],
      borrowDate: ['',Validators.required],
      returnDate: ['',Validators.required],
    })


    //pour recuperer le id de la route activé
    let id = this.activateRoute.snapshot.paramMap.get('id');
    if(id){
      let reservation = this.reservationBookService.getReservationId(id);
      if(reservation) this.reservationBook.patchValue(reservation);

    }
  }


  onSubmit(): void{
    if(this.reservationBook.valid){
      let newBook: Reservation = this.reservationBook.value;
      // ON VERIFIER SI ON A LE ID COMME CE ON FAIT LE EDIT SINON IL VA ENREGISTRER COMME UN NOUVEAU ELEMENT DANS LA LOCALSTORAGE
      //pour recuperer le id de la route activé
      let id = this.activateRoute.snapshot.paramMap.get('id');
      if(id){
        //Update
        this.reservationBookService.updateReservation(id,newBook);
      }else{
        this.reservationBookService.addReservationBooks(newBook);
        this.reservationBook.reset();
        this.showSuccessMessage = true;
      }
      //redirection
      //this.router.navigate(['/list'])
    }
  }
}
