import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TrainserviceService } from 'src/app/trainservice.service';

export const MY_DATE_FORMAT = {
  parse: {
    dateInput: ['l', 'LL'],  
  },
  display: {
    dateInput: 'DD MMM YYYY', 
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL', 
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-train-search',
  templateUrl: './train-search.component.html',
  styleUrls: ['./train-search.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter },
{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }

  ]
})
export class TrainSearchComponent implements OnInit {
  public mattab = 4;
  public today = new Date();
  locations: any[] = [];
  selectedOption: string = 'book';

  searchform: FormGroup = new FormGroup({
    startplace: new FormControl(''),
    endplace: new FormControl(''),
    travelDate: new FormControl(false),
    trainClass: new FormControl(''),
  });
  constructor( private formBuilder: FormBuilder,private http: HttpClient,private router: Router,private service: TrainserviceService){}

  ngOnInit(): void {
    this.searchform = this.formBuilder.group ({
      startplace: ['', Validators.required],
      endplace: ['', Validators.required],
      travelDate: ['', Validators.required],
      trainClass: ['', Validators.required],
      
    });

    this.service.getlocation().subscribe(
      res => { 
        this.locations = res;
      },
      error => {
        console.error('An error occurred:', error);
      }
    )
}
trainClasses = [
  { value: 'all', viewValue: 'All' },
  { value: 'sleeper', viewValue: 'Sleeper (SL)' },
  { value: 'third_ac', viewValue: 'Third AC (3A)' },
  { value: 'second_ac', viewValue: 'Second AC (2A)' },
  { value: 'first_ac', viewValue: 'First AC (1A)' },
];
  navItems = [
    { label: 'Flights', icon: 'flight', tab: 0 },
    { label: 'Hotels', icon: 'hotel', tab: 1 },
    { label: 'Homestays & Villas', icon: 'home', tab: 2 },
    { label: 'Holiday Packages', icon: 'card_travel', tab: 3 },
    { label: 'Trains', icon: 'train', tab: 4 },
    { label: 'Buses', icon: 'directions_bus', tab: 5 },
    { label: 'Cabs', icon: 'directions_car', tab: 6 },
    { label: 'Forex Card & Currency', icon: 'attach_money', tab: 7 },
    { label: 'Travel Insurance', icon: 'shield', tab: 8 }
  ];

  onTabChange(index: number): void {
    this.mattab = index;
    console.log('Tab changed to:', index);
  }

  filteredLocations = this.locations;
  filteredLocationsend = this.locations;

  onSearch() {
    const searchValue = this.searchform.get('startplace')?.value.toLowerCase() || '';
    this.filteredLocations = this.locations.filter(location =>
      location.name.toLowerCase().includes(searchValue)
    );
  }

  onSearchend() {
    const searchValueend = this.searchform.get('endplace')?.value.toLowerCase() || '';
    this.filteredLocationsend = this.locations.filter(location =>
      location.name.toLowerCase().includes(searchValueend)
    );
  }

  getDayOfWeek(): string {
    const selectedDate = this.searchform.controls['travelDate'].value;
    if (selectedDate) {
      return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
        new Date(selectedDate)
      );
    }
    return '';
  }

  handlesubmit() {
    if(this.searchform.valid) {
      localStorage.setItem('trainSearchDetails', JSON.stringify(this.searchform.value));
      this.router.navigate(['/ticket/train']);
    }
  }
}
