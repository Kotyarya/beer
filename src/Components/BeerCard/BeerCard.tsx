import React, {FC} from 'react';
import style from "./BeerCard.module.scss"
import {useNavigate} from "react-router-dom";

export interface BeerCardProps {
    name: string | null,
    image_url: string | null,
    id: number | null
}

const BeerCard: FC<BeerCardProps> = ({name, id, image_url}) => {

    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(`/${id}`)
    }


    return (
        <div className={style.card} onClick={clickHandler}>
            <img src={image_url || ""} alt=""/>
            <h2>{name}</h2>
        </div>
    );
};

export default BeerCard;