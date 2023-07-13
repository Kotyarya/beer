import React from 'react';
import style from "./Aside.module.scss"
import {useAsideStore} from "./store/asideStore";
import BeerSmallCard from "../../Components/BeerSmallCard/BeerSmallCard";

const Aside = () => {
    const asideBeers = useAsideStore(state => state.beers)


    return (
        <div className={style.aside}>
            {asideBeers.map((beers) => {
                return <BeerSmallCard name={beers.name} image_url={beers.image_url} id={beers.id}/>
            })}
            <button>Delete</button>
        </div>
    );
};

export default Aside;