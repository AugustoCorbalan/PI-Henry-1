import { React, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import PaginatedCards from './PaginatedCards';
import { getVideogames } from '../../Redux/actions';


const Cards= ({genre, order})=>{
    const dispatch= useDispatch();
    const videogames= useSelector((state)=>state.videogames);
    const { searchName }= useSelector((state)=>state.searchName);
    console.log(videogames);

    
    useEffect(()=>{
            dispatch(getVideogames())
    },[])

    let listaVideogames=filterBygenre(genre, videogames);
        listaVideogames=filterByName(searchName, listaVideogames);
        listaVideogames=orderer(order, listaVideogames);

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
};

const orderer=(orden, videogames)=>{
   
    if(orden== "?alf&asc"){
        videogames.sort((a, b)=>{
            if(a.name > b.name) return 1
            if(a.name < b.name) return -1
            if(a.name == b.name) return 0
          })
          return videogames;
    }
    else if(orden== "?alf&des"){
        videogames.sort((a, b)=>{
            if(a.name < b.name) return 1
            if(a.name > b.name) return -1
            if(a.name == b.name) return 0
          })
        return videogames;
    }
    else if(orden== "?rating&asc"){
        videogames.sort((a, b)=>{
            if(a.rating > b.rating) return 1
            if(a.rating < b.rating) return -1
            if(a.rating == b.rating) return 0
          })
          return videogames;
    }
    else if(orden== "?rating&des"){
        videogames.sort((a, b)=>{
            if(a.rating < b.rating) return 1
            if(a.rating > b.rating) return -1
            if(a.rating == b.rating) return 0
          })
          return videogames;
    }
    else{
        return videogames;
    }
};

export default Cards
