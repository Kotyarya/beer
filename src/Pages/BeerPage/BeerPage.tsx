import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useBeerStore} from "./store/beerStore";

const BeerPage = () => {
    const {beerId} = useParams()
    const setBeer = useBeerStore(state => state.setBeer)
    const beer = useBeerStore(state => state)

    useEffect(() => {
        setBeer(Number(beerId))
    }, [beerId, setBeer])


    return (
        <div>
            {beer.name}
        </div>
    );
};

export default BeerPage;