import type { Product } from './types';

export const getProductsByCategory = async (category: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return (await res.json()) as Product[];
}