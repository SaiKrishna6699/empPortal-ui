import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviconComponent } from './navicon.component';

describe('NaviconComponent', () => {
  let component: NaviconComponent;
  let fixture: ComponentFixture<NaviconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaviconComponent]
    });
    fixture = TestBed.createComponent(NaviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
