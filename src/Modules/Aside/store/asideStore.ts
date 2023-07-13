import {create} from "zustand";
import {IBeerStore} from "../../../Pages/BeerPage/store/beerStore";

interface IAsideStore {
    beers: IBeerStore[],
    addBeers: (beer: IBeerStore) => void
}


export const useAsideStore = create<IAsideStore>(set => ({
    beers: [],
    addBeers: (beer: IBeerStore) => {
        set(state => ({
            beers: [...state.beers, beer]
        }))
    }
}))