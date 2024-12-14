import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainAvailableComponent } from './train-available.component';

describe('TrainAvailableComponent', () => {
  let component: TrainAvailableComponent;
  let fixture: ComponentFixture<TrainAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainAvailableComponent]
    });
    fixture = TestBed.createComponent(TrainAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
