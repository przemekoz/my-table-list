import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaymentsList, ListGetParams } from '../interfaces/payments.interface';

@Injectable({
    providedIn: 'root'
})
export class PaymentsListService {

    private url = 'http://test-api.kuria.tshdev.io/';

    constructor(private http: HttpClient) { }

    get(params: ListGetParams) {
        return this.http.get<PaymentsList>(this.url, { params: this.prepareGetParam(params) });
    }

    prepareGetParam(params: ListGetParams): HttpParams {
        let result = new HttpParams();

        if (params.page > -1) {
            result = result.append('page', params.page + '');
        }
        if (params.filters.rating >= 0 && params.filters.rating < 6) {
            result = result.append('rating', params.filters.rating + '');
        }
        if (params.filters.supplier.length) {
            result = result.append('query', params.filters.supplier);
        }

        return result;
    }
}
