import {Products} from '../products/product';

export interface Order {
    user_id: number;
    table: number;
    price: number;
    client: string;
    comments: string;
    flavor: string;
    itensOrder: Array<Products>
    products: Array<Products>
}
