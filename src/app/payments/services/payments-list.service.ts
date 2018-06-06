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

        if (Number.isInteger(params.page)) {
            urlParams = urlParams.append('page', params.page + '');
        }
        return this.http.get<PaymentsList>('http://test-api.kuria.tshdev.io/', { params: urlParams });
    }
}
