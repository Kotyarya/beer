import React, {FC} from 'react';
import style from "./BeerSmallCard.module.scss"
import {BeerCardProps} from "../BeerCard/BeerCard";


const BeerSmallCard: FC<BeerCardProps> = ({name, id, image_url}) => {
    return (
        <div className={style.smallCard}>
            <img src={image_url || ""} alt=""/>
            <p>{name}</p>
        </div>
    );
};

export default BeerSmallCard;