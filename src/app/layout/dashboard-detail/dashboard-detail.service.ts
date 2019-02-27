import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConfig } from '../../shared/config';
@Injectable({
  providedIn: 'root'
})
export class DashboardDetailService {
  constructor(public http: HttpClient) { }

  getRevenueToday(id) {
    var urlGet=AppConfig.API_REVENUE_TODAY_BY_PCID.replace('$pcid', id)
    return this.http.get(urlGet);
  }

  getTotalMoneyByVehicle(id) {
    var urlGet=AppConfig.API_REVENUE_BY_VEHICLE_BY_PCID.replace('$pcid', id)
    return this.http.get(urlGet);
  }
  getREVENUE_BY_MONTH(id) {
    var urlGet=AppConfig.API_REVENUE_BY_MONTH_OF_YEAR_PCID.replace('$pcid', id)
    return this.http.get(urlGet);
  }
}
