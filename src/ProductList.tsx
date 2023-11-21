import { useEffect, useState } from "react";
import { Product } from "./api/types";
import { getProducts } from "./api/getProducts";

export const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        }
        fetchProducts();

    }, [])

    return <>
        {products.map(product => <div data-testid={product.id}>{product.title}</div>)}
    </>

}