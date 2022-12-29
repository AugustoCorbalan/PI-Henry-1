import { React, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import PaginatedCards from './PaginatedCards';
import { getVideogames, searchName } from '../Redux/actions';


const Cards= ({genre})=>{
    const dispatch= useDispatch();
    const videogames= useSelector((state)=>state.videogames);
    const { searchName }= useSelector((state)=>state.searchName);

    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch])

    let listaVideogames=filterBygenre(genre, videogames);
        listaVideogames=filterByName(searchName, listaVideogames);

    return(
        <>
            <PaginatedCards videogames={listaVideogames}/>
        </>
    )
};


const filterBygenre=(genre, videogames)=>{
    if(genre==="all"){
        return videogames;
    }
    else{
        videogames=videogames.filter((videogame)=>{
            return videogame.genres.includes(genre)
        })
        return videogames;
    }
};

const filterByName=(searchName, videogames)=>{
    if(!searchName){
        return videogames;
    }
    else{
        videogames= videogames.filter((videogame)=>{
            return videogame.name.toLowerCase().includes(searchName.toLowerCase());
        })
        return videogames;
    }
}


export default Cards
