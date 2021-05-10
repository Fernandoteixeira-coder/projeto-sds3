import { NumericLiteral } from "typescript"
import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: Number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller
    
}

export type SalePage = {

    content?: Sale [];
    last: boolean;
    totalPages: number;
    totalElements: Number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}
export type SaleSum = {

    sellerName: string;
    sum: number;
    
}

export type SaleSuccess = {

    sellerName: string;
    visited: number;
    deals: number;

}