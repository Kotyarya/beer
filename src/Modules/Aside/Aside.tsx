import React from 'react';
import style from "./Aside.module.scss"
import {useAsideStore} from "./store/asideStore";
import BeerSmallCard from "../../Components/BeerSmallCard/BeerSmallCard";
import {useBeerListStore} from "../../Pages/HomePage/store/BeerListStore";

const Aside = () => {
    const {beers, beersId, deleteBeersInAside} = useAsideStore(state => state)
    const deleteBeers = useBeerListStore(state => state.deleteBeers)


    const deleteAll = () => {
        deleteBeers(beersId)
        deleteBeersInAside()
    }


    return (
        <div className={style.aside}>
            {beers.map((beers) => {
                return <BeerSmallCard key={beers.id} name={beers.name} image_url={beers.image_url} id={beers.id}/>
            })}
            <button onClick={deleteAll}>Delete</button>
        </div>
    );
};

export default Aside;