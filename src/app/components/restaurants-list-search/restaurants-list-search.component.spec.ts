import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsListSearchComponent } from './restaurants-list-search.component';

describe('RestaurantsListSearchComponent', () => {
  let component: RestaurantsListSearchComponent;
  let fixture: ComponentFixture<RestaurantsListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
