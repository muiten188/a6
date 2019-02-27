import { TestBed } from '@angular/core/testing';

import { DashboardDetailService } from './dashboard-detail.service';

describe('DashboardDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardDetailService = TestBed.get(DashboardDetailService);
    expect(service).toBeTruthy();
  });
});
