

import type { CatFact } from "./types";

export const getCatFacts = async () => {
    const res = await fetch(`https://catfact.ninja/fact`);
    return (await res.json()) as CatFact;
}