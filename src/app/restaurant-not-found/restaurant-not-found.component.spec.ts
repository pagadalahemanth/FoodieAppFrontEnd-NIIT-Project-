import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantNotFoundComponent } from './restaurant-not-found.component';

describe('RestaurantNotFoundComponent', () => {
  let component: RestaurantNotFoundComponent;
  let fixture: ComponentFixture<RestaurantNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
