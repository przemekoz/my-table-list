import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { PaymentsListService } from './payments-list.service';

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
});
