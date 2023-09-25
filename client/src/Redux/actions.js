import axios from 'axios';

export const GET_VIDEOGAMES= "GET_VIDEOGAMES";
export const GET_GENRES= "GET_GENRES"; 
export const GET_DETAILVIDEOGAME = "GET_DETAILVIDEOGAME";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const SEARCH_NAME = "SEARCH_NAME";
export const POST_VIDEOGAMES = "POST_VIDEOGAMES";

export const getVideogames= ()=>{
    return async function(dispatch){
        const infoServer = await axios.get('http://localhost:3001/videogames');
        const data= infoServer.data;
        dispatch({type:GET_VIDEOGAMES, payload: data});
    }
};

export const getGenres= ()=>{
    return async function(dispatch){
        const info = await axios.get('http://localhost:3001/genres');
        const data= info.data;
        dispatch({type: GET_GENRES, payload: data})
    }
}

export const getDetailVideogames= (id)=>{
    return async function(dispatch){
        const infoServer = await axios.get(`http://localhost:3001/videogames/${id}`);
        const data= infoServer.data;
        dispatch({type:GET_DETAILVIDEOGAME, payload: data});
    }
};

export const postVideogames= (data)=>{
    const dataJson= JSON.stringify(data);
    console.log("ingreso1", dataJson)
    return async function(dispatch){
        console.log("ingreso2")
        const result = await axios.post(`http://localhost:3001/videogames`, dataJson);
        console.log("Enviado")
        dispatch({type: POST_VIDEOGAMES, payload: result})
    }
}

export const cleanDetail=()=>{
    return function(dispatch){
        dispatch({type: CLEAN_DETAIL, payload: {}})
    }
};

export const searchName=(searchName)=>{
    return function(dispatch){
        dispatch({type: SEARCH_NAME, payload: {searchName: searchName}})
    }
}