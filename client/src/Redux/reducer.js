import { GET_VIDEOGAMES, POST_VIDEOGAMES, GET_DETAILVIDEOGAME, CLEAN_DETAIL, SEARCH_NAME, GET_GENRES } from './actions.js';


const initialState={
    videogames: [],
    details: {},
    genres:[],
    searchName: "",
};

const rootReducer= (state= initialState, action)=>{
    switch(action.type){

        case GET_VIDEOGAMES:
            return{
                ...state,
                videogames: action.payload
            }
        case POST_VIDEOGAMES:
            console.log("PostVideogames")
            return
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
            }
        case GET_DETAILVIDEOGAME:
            return{
                ...state,
                details: action.payload
            }    
        case CLEAN_DETAIL:
            return{
                ...state,
                details: action.payload
            }
        case SEARCH_NAME:
            return{
                ...state,
                searchName: action.payload
            }
        default:
            return {...state};
    }
};

export default rootReducer;