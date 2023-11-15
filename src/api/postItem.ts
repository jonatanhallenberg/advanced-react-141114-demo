

import type { Item } from "./types";

export const postItem = async (newItem: Item) => {
    const res = await fetch('http://localhost:5001/items', {
        method: 'POST',
        body: JSON.stringify(newItem),
    });

    return (await res.json()) as Item;
}