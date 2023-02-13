import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavComponent } from './add-to-fav.component';

describe('AddToFavComponent', () => {
  let component: AddToFavComponent;
  let fixture: ComponentFixture<AddToFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
