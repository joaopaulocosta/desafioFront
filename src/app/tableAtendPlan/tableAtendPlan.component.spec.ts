import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAtendPlanComponent } from './tableAtendPlan.component';

describe('TableComponent', () => {
  let component: TableAtendPlanComponent;
  let fixture: ComponentFixture<TableAtendPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAtendPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAtendPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
