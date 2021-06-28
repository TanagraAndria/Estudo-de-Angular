import {Products} from '../products/product';

export interface Order {
    id: number;
    table: number;
    price: number;
    name: string;
    flavor: string;
    itensOrder: Array<Products>
}