import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConfig } from '../../shared/config';
@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor(public http: HttpClient) { }

  getRevenueToday() {
    return this.http.get(AppConfig.API_TOTAL_MONEY_TODAY);
  }

  getTotalMoneyByVehicle() {
    return this.http.get(AppConfig.API_TOTAL_MONEY_BY_VEHICLE);
  }
  getTransaction_By_Center() {
    return this.http.get(AppConfig.API_TRANSACTION_BY_CENTER);
  }

  getTotalMoneyByYear() {
    return this.http.get(AppConfig.API_MONEY_BY_YEAR);
  }
}
