import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBasicsComponent } from './employee-basics.component';

describe('EmployeeBasicsComponent', () => {
  let component: EmployeeBasicsComponent;
  let fixture: ComponentFixture<EmployeeBasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeBasicsComponent]
    });
    fixture = TestBed.createComponent(EmployeeBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
