import {create} from "zustand";
import {IBeerStore} from "../../BeerPage/store/beerStore";
import {beerAPI} from "../../../API/beerAPI";

interface IBeerListStore {
    beerList: IBeerStore[],
    setBeerList: (page: number) => void,
    deleteBeers: (arrDeleteId: number[]) => void
}

export const useBeerListStore = create<IBeerListStore>((set) => ({
    beerList: [],
    setBeerList: async (page: number) => {
        const result = await beerAPI.getAllBeer(page)
        set(state => ({
            beerList: [
                ...state.beerList,
                ...result
            ]
        }))
    },
    deleteBeers: (arrDeleteId: number[]) => {
        set(state => ({
            beerList: state.beerList.filter(beer => !(arrDeleteId.some((id) => id === beer.id)))
        }))
    }
}))