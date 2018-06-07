export interface PaymentsListFilter {
    supplier: string;
    rating: number;
}

export interface PaymentsListItem {
    payment_supplier: string;
    payment_ref: string;
    payment_cost_rating: string;
    payment_amount: string;
}

export interface PaymentsListPagination {
    total: number;
    current: number;
    links: any;
    from: number;
    to: number;
    left: boolean;
    right: boolean;
    leftEnd: boolean;
    rightEnd: boolean;
}

export interface PaymentsList {
    payments: PaymentsListItem[];
    pagination: PaymentsListPagination;
}


export interface ListGetParams {
    page: number;
    filters: PaymentsListFilter;
}
