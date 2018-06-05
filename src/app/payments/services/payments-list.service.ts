import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentsList } from '../interfaces/payments.interface';

@Injectable({
    providedIn: 'root'
})
export class PaymentsListService {

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<PaymentsList>('http://test-api.kuria.tshdev.io/');
    }
}
