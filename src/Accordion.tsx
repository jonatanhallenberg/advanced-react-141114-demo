import { useState } from "react";
import { Product } from "./api/types";
import { getProducts } from "./api/getProducts";

export const Accordion = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    const toggleOpen = async () => {
        setOpen(!open)
        const products = await getProducts();
        setProducts(products);
    }

    return (<>
        <button data-testid="toggle-btn" onClick={() => toggleOpen()}>{open ? 'Stäng' : 'Öppna'}</button>
        {open && <div data-testid="accordion-content">
            { products.map(product => <div data-testid={`product_${product.id}`} key={product.id}>{product.title}</div>)}
        </div>}
    </>)
}