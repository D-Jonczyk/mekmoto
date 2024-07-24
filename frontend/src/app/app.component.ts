import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MotoListComponent} from "./moto-list/moto-list.component";
import {ReservationDetailsComponent} from "./reservation-details/reservation-details.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MotoListComponent, ReservationDetailsComponent, CalendarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mekmoto-app';
}
