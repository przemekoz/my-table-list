import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaymentsList, ListGetParams } from '../interfaces/payments.interface';
import { of } from 'rxjs';

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

        return of(
            {
                payments: [
                    { payment_supplier: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ', payment_cost_rating: '4', payment_ref: '12312', payment_amount: '123' },
                    { payment_supplier: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ', payment_cost_rating: '4', payment_ref: '1231', payment_amount: '12' },
                    { payment_supplier: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ', payment_cost_rating: '4', payment_ref: '12', payment_amount: '1231' },
                    { payment_supplier: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ', payment_cost_rating: '4', payment_ref: '123223', payment_amount: '123' },
                    { payment_supplier: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ', payment_cost_rating: '4', payment_ref: '12', payment_amount: '123123' }
                ],
                pagination: {
                    total: 100,
                    leftEnd: true,
                    left: true,
                    current: 2,
                    from: 0,
                    to: 3,
                    links: {
                        0: '1',
                        1: '2',
                        2: '3',
                        3: '4',
                        4: '5',
                    },
                    right: true,
                    rightEnd: true
                }
            }
        );
        // return this.http.get<PaymentsList>('http://test-api.kuria.tshdev.io/', { params: urlParams });
    }
}
