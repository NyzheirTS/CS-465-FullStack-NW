import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { Authentication } from '../services/authentication';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})



export class TripCard implements OnInit{
  @Input('trip') trip:any;
  @Output() tripDeleted = new EventEmitter<string>();

  constructor(private router: Router, private authenticationService: Authentication, private tripDataService: TripData){}

  ngOnInit(): void {
    
  }

  public editTrip(trip: Trip){
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    this.tripDataService.deleteTrip(trip.code)
      .subscribe({
        next: (value: any) => {
          this.tripDeleted.emit(trip.code);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }
}

