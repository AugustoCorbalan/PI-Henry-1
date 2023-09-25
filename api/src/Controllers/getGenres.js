const axios = require('axios');
const { Genres } = require('../db.js');
require('dotenv').config();
const { API_KEY } = process.env;

const getGenres= async ()=>{
    let dbInfo= await getDbGenres();
    if(dbInfo.length){
        return dbInfo
    }
    else {
        try {
            const apiInfo = await getApiGenres();
            const genres= await saveGenres(apiInfo);
            console.log(genres);
            return genres;
        } catch (error) {
            console.log(error.message)
        }
    }
};

async function getDbGenres(){
    console.log("getDbGenres")
    try {
        const dbInfo= await Genres.findAll();
        return dbInfo;
    } catch {
        const error= new Error("Error en la BD")
        throw error;
    }
}

async function saveGenres(apiInfo){
    console.log("saveGenres")
    try {
       const genres= await Genres.bulkCreate(apiInfo);
       return genres;
        
    } catch {
        const error= new Error('Ocurrió un error al cargar en la base de datos');
        throw error;
    }
}
async function getApiGenres(){
    console.log("getApiGenres")
    try {
        const apiRes= await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        const apiInfo= apiRes.data.results.map((el)=>{
            return{
                name: el.name
            }
        })
        return apiInfo;
    } catch {
        const error= new Error('Ocurrió un error en la Api')
        throw error;
    }
}

module.exports= {getGenres};