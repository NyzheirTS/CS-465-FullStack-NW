import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip'
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
  providers: [TripData]
})


export class TripListing implements OnInit {
  trips!: Trip[];
  message: String='';

  constructor(private tripData: TripData, private changeDetector: ChangeDetectorRef, private router:Router, private authenticationService: Authentication){
    console.log('trip-listing constructor');
  }

  public addTrip() : void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.tripData.getTrips()
      .subscribe({
        next: (value: any) => { 
          this.trips = value;
          console.log(value);

          if(value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database';
          }
          //console.log(this.message);
          this.changeDetector.detectChanges();
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  removeTrip(code: string) {
    this.trips = this.trips.filter(trip => trip.code !== code);
  }


  ngOnInit(): void {
    //console.log('ngOnInit');
    this.getStuff();
  }
}

