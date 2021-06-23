import {Products} from '../products/product';

export interface Order {
    id: number;
    table: number;
    itensOrder: Array<Products>
}