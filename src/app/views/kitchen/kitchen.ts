import {Products} from '../hall/components/products/product';
export interface Kitchen {
    user_id: number;
    table: number;
    price: number;
    client: string;
    comments: string;
    name: string;
    flavor: string;
    itensOrder: Array<Products>
    products: Array<Products>
}
