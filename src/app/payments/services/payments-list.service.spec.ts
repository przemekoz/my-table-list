import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaymentsListService } from './payments-list.service';
import { ListGetParams } from '../interfaces/payments.interface';

describe('PaymentsListService', () => {

    let httpClientSpy: { post: jasmine.Spy };
    let service: PaymentsListService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
        service = new PaymentsListService(<any>httpClientSpy);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('[0] should generate proper param for GET', () => {
        const params: ListGetParams = {
            page: -100,
            filters: {
                supplier: '',
                rating: 100
            }
        };
        const result = new HttpParams();
        expect(service.prepareGetParam(params)).toEqual(result);
    });

    it('[1] should generate proper param for GET', () => {
        const params: ListGetParams = {
            page: -100,
            filters: {
                supplier: 'TEST',
                rating: 100
            }
        };
        let result = new HttpParams();
        result = result.append('query', 'TEST');
        expect(service.prepareGetParam(params)).toEqual(result);
    });

    it('[2] should generate proper param for GET', () => {
        const params: ListGetParams = {
            page: 100,
            filters: {
                supplier: '',
                rating: -100
            }
        };
        let result = new HttpParams();
        result = result.append('page', '100');
        expect(service.prepareGetParam(params)).toEqual(result);
    });

    it('[3] should generate proper param for GET', () => {
        const params: ListGetParams = {
            page: 33,
            filters: {
                supplier: 'TEST DWA',
                rating: 3
            }
        };
        let result = new HttpParams();
        result = result.append('page', '33');
        result = result.append('rating', '3');
        result = result.append('query', 'TEST DWA');
        expect(service.prepareGetParam(params)).toEqual(result);
    });

    it('[4] should generate proper param for GET', () => {
        const params: ListGetParams = {
            page: 11,
            filters: {
                supplier: '[]{}\|/,.<>?!@#$%^&*()_+ ążśźęćńółĄŻŚŹĘĆŃÓŁ',
                rating: 0
            }
        };
        let result = new HttpParams();
        result = result.append('page', '11');
        result = result.append('rating', '0');
        result = result.append('query', '[]{}\|/,.<>?!@#$%^&*()_+ ążśźęćńółĄŻŚŹĘĆŃÓŁ');
        expect(service.prepareGetParam(params)).toEqual(result);
    });

});
