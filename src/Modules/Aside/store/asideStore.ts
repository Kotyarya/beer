import {create} from "zustand";
import {IBeerStore} from "../../../Pages/BeerPage/store/beerStore";

interface IAsideStore {
    beers: IBeerStore[],
    addBeers: (beer: IBeerStore) => void,
    beersId: number[],
    deleteBeersInAside: () => void
}


export const useAsideStore = create<IAsideStore>(set => ({
    beers: [],
    beersId: [],
    addBeers: (beer: IBeerStore) => {
        const id = beer.id || 0

        set(state => {
            if (state.beers.some((oneBeer) => oneBeer.id === id)) {
                return {
                    ...state,
                    beers: state.beers.filter((oneBeer) => oneBeer.id !== id),
                    beersId: state.beersId.filter((beerId) => beerId !== id)
                }
            } else {
                return {
                    beers: [...state.beers, beer],
                    beersId: [...state.beersId, id]
                }
            }
        })
    },
    deleteBeersInAside: () => {
        set({
            beers: [],
            beersId: []
        })
    }
}))
