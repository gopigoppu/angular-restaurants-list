import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsListPaginationComponent } from './restaurants-list-pagination.component';

describe('RestaurantsListPaginationComponent', () => {
  let component: RestaurantsListPaginationComponent;
  let fixture: ComponentFixture<RestaurantsListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
