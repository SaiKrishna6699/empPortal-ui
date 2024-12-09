import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcardComponent } from './navcard.component';

describe('NavcardComponent', () => {
  let component: NavcardComponent;
  let fixture: ComponentFixture<NavcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavcardComponent]
    });
    fixture = TestBed.createComponent(NavcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
