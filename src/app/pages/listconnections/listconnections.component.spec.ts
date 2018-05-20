import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconnectionsComponent } from './listconnections.component';

describe('ListconnectionsComponent', () => {
  let component: ListconnectionsComponent;
  let fixture: ComponentFixture<ListconnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListconnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListconnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
