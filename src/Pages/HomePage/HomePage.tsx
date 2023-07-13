import React, {useEffect, useState} from 'react';
import {useBeerListStore} from "./store/BeerListStore";
import BeerCard from "../../Components/BeerCard/BeerCard";
import style from "./HomePage.module.scss"
import {useAsideStore} from "../../Modules/Aside/store/asideStore";

const HomePage = () => {

    const addBeers = useAsideStore(state => state.addBeers)
    const {beerList, setBeerList} = useBeerListStore(state => state)
    const [fetching, setFetching] = useState(true)
    const [startIndex, setStartIndex] = useState<number>(-5)
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        const handleContextMenu = (e: any) => {
            e.preventDefault()
        }

        document.addEventListener("contextmenu", handleContextMenu)

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu)
        }

    }, [])

    useEffect(() => {
        if (fetching) {
            setBeerList(currentPage)
            setFetching(false)
            setStartIndex(startIndex + 5)
        }
        // eslint-disable-next-line
    }, [fetching])

    const scrollHandler = async (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollHeight - (e.currentTarget.scrollTop + window.innerHeight) === 0) {
            setFetching(true)
            await setTimeout(() => {
                setStartIndex(startIndex + 5)
            }, 100)

            if (startIndex % 25 === 0) {
                setCurrentPage(currentPage + 1)
            }
        } else if (e.currentTarget.scrollTop === 0) {
            if (startIndex > 0) {
                await setTimeout(() => {
                    setStartIndex(startIndex - 5)
                }, 100)
            }
        }
    }

    const selectBeerForDelete = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.button)
    }


    return (
        <div className={style.homePage} onScroll={scrollHandler}>
            {beerList.map((beer, index) => {
                if (index < (startIndex + 15) && index >= startIndex) {
                    return <div key={beer.id} onClick={selectBeerForDelete}><BeerCard id={beer.id} name={beer.name}
                                                                                      image_url={beer.image_url}/></div>
                } else {
                    return null
                }
            })}
        </div>
    );
};

export default HomePage;