import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainserviceService } from 'src/app/trainservice.service';

interface Train {
  from: string;
  to: string;
  availableTrains: Array<{
    trainNumber: string;
    trainName: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    classAvailable: {
      class: string;
      fare: number;
      availableSeats: number;
      pendingSeats: number;
      lastUpdated: string;
    }[];
  }>;
}

@Component({
  selector: 'app-train-available',
  templateUrl: './train-available.component.html',
  styleUrls: ['./train-available.component.scss']
})
export class TrainAvailableComponent implements OnInit {
  public selecteddate: any;
 
  filteredTrains: Train[] = []; 
      constructor( private router: Router,private service: TrainserviceService,){}

  trainClasses = [
    { value: '1class', viewValue: '1st Class AC-1A',count: 20 },
    { value: '2class', viewValue: '2nd Class AC-2A',count: 2 },
    { value: '3class', viewValue: '3rd Class AC-3A',count:13 },
    { value: 'sleeper', viewValue: 'Sleeper-SL',count: 7 },
    { value: 'second', viewValue: 'Second Sitting - 25',count: 8 },
    { value: 'ac-chair', viewValue: 'Ac Chair Car - cc',count: 16 },
  ];

  araivaltime = [
    {icon: 'light_mode', time: '12am - 6am'},
    {icon: 'wb_twilight', time: '6am - 12pm'},
    {icon: 'routine', time: '12pm - 6pm'},
    {icon: 'dark_mode', time: '6pm - 12am'}
  ]

   ngOnInit(): void {
    const storedSearchDetails = localStorage.getItem('trainSearchDetails');

    if (storedSearchDetails) {
      const searchDetails = JSON.parse(storedSearchDetails);
      console.log(searchDetails);
    
      this.service.getavailabe().subscribe(
        (res:Train[]) => {
          this.filteredTrains = res.filter((train) => 
            train.from.toLowerCase() === searchDetails.startplace.toLowerCase() && 
            train.to.toLowerCase() === searchDetails.endplace.toLowerCase()
          );
          console.log(this.filteredTrains); 
          // if(this.filteredTrains.length == 0 ) {
          //   this.router.navigate(['/ticket'])
          // }
          const date = new Date(searchDetails.travelDate);
          this.selecteddate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short' }).format(date);
          console.log(this.selecteddate);
          
        },
        error => {
          console.error('An error occurred:', error);
        }
      );
    } else {
      console.log('No search details found in localStorage.');
    }
    
    // this.selecteddate = storedSearchDetails.
  }
    
  naviagteHome() {
    this.router.navigate(["/"])
  }

}
