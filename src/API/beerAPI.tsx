import {instance} from "./axiosInstance";
import {IBeerStore} from "../Pages/BeerPage/store/beerStore";

export const beerAPI = {
    async getOneBeer(beerId: number) {
        try {
            const response = await instance.get<IBeerStore[]>(`/${beerId}`)
            return response.data[0]
        } catch (e) {
            alert(e)
        }
    },

    async getAllBeer(page: number) {
        try {
            const response = await instance.get(`?page=${page}`)
            return response.data
        } catch (e) {

        }
    }
}