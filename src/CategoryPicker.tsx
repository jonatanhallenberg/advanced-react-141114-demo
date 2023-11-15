import { useEffect, useState } from "react";
import { getCategories } from "./api/getCategories";
import { Product, getProductsByCategory } from "./api/getProductsByCategory";
import { useContext } from 'react';
import { AppContext } from "./context/AppContext";

export const CategoryPicker = () => {

    const { text, setText} = useContext(AppContext);

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("jewelery");

    useEffect(() => {
        const loadCategories = async () => {
            setCategories(await getCategories());
        }

        loadCategories();
    })

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            setProducts(await getProductsByCategory(selectedCategory));
        }

        loadProducts();

    }, [ selectedCategory ]);

    return <>
        <h1>Select a category ({text})</h1>
        {categories.map(category => <button style={{ backgroundColor: category === selectedCategory ? 'lightgreen' : 'inherit' }} key={category} onClick={() => setSelectedCategory(category)}>{category}</button>)}

        <h2>Produkter</h2>
        {products.map(product => <p key={product.id}>{product.title}</p>)}

        <h2>Set text</h2>
        <button onClick={() => setText("ny text")}>Ändra text</button>
    </>
}