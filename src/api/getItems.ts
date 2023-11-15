

import type { Item } from "./types";

export const getItems = async () => {
    const res = await fetch(`http://localhost:5001/items`);
    return (await res.json()) as Item[];
}