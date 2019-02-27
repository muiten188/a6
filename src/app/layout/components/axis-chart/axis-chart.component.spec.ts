import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisChartComponent } from './axis-chart.component';

describe('AxisChartComponent', () => {
  let component: AxisChartComponent;
  let fixture: ComponentFixture<AxisChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
