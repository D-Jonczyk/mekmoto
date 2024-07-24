import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-moto-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './moto-list.component.html',
  styleUrl: './moto-list.component.scss'
})
export class MotoListComponent {
  motorcycles = [
    { name: 'Yamaha MT-07', image: 'assets/images/yamaha_mt07.jpg' },
    { name: 'Kawasaki Ninja', image: 'assets/images/kawasaki_ninja.jpg' },
    { name: 'Honda CB500', image: 'assets/images/honda_cb500.jpg' }
  ];

  reserveMotorcycle(motorcycle: any) {
    console.log('Reserving motorcycle:', motorcycle.name);
  }
}
