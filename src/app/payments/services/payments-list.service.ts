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
        let urlParams = new HttpParams();

        if (params.page > -1) {
            urlParams = urlParams.append('page', params.page + '');
        }
        if (params.filters.rating > 0) {
            urlParams = urlParams.append('rating', params.filters.rating + '');
        }
        if (params.filters.supplier.length) {
            urlParams = urlParams.append('query', params.filters.supplier);
        }

        return this.http.get<PaymentsList>('http://test-api.kuria.tshdev.io/', { params: urlParams });
    }
}
