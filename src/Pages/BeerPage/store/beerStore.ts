import {create} from "zustand";
import {beerAPI} from "../../../API/beerAPI";

interface IHops extends IMalt {
    add: string,
    attribute: string
}

interface IMalt {
    name: string,
    amount: {
        value: number,
        unit: string
    }
}

interface IIngredients {
    malt: IMalt[],
    hops: IHops[],
    yeast: string
}


export interface IBeerStore {
    id: number | null,
    name: string | null,
    tagline: string | null,
    description: string | null,
    image_url: string | null,
    first_brewed: string | null,
    ingredients: IIngredients | null,
    food_pairing: string[] | null,
    brewers_tips: string | null,
    contributed_by: string | null,
    setBeer: (beerId: number) => void
}


export const useBeerStore = create<IBeerStore>((set) => ({
    id: null,
    name: null,
    tagline: null,
    description: null,
    image_url: null,
    first_brewed: null,
    ingredients: null,
    food_pairing: null,
    brewers_tips: null,
    contributed_by: null,
    setBeer: async (beerId: number) => {
        const result = await beerAPI.getOneBeer(beerId) as IBeerStore
        set({...result})
    }
}))