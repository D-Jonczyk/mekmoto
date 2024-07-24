import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-reservation-details',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './reservation-details.component.html',
  styleUrl: './reservation-details.component.scss'
})
export class ReservationDetailsComponent {
  reservation = {
    startDate: '',
    endDate: '',
    motorcycle: ''
  };

  motorcycles = [
    { name: 'Yamaha MT-07' },
    { name: 'Kawasaki Ninja' },
    { name: 'Honda CB500' }
  ];

  submitReservation() {
    console.log('Reservation details:', this.reservation);
  }
}
