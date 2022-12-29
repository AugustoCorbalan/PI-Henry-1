const axios = require('axios');
const { Genres } = require('../db.js');

const getGenres= async ()=>{

    let dbInfo= await getDbGenres();

    if(dbInfo.length){
        return dbInfo
    } 
    else {
        const apiInfo = await getApiGenres(); 
        loadGenres(apiInfo);
    }
    return getGenres();
};

const getDbGenres= async()=>{
    try {
        const dbInfo= await Genres.findAll();
        return dbInfo;
    } catch {
        const error= new Error("Error en la BD")
        throw error;
    }
}

const loadGenres= async(apiInfo)=>{
    try {
        await apiInfo.map(async(el)=>{
            await Genres.create(el);
        });
    } catch {
        const error= new Error('Ocurrió un error al cargar en la base de datos');
        throw error;
    }
}
const getApiGenres= async()=>{
    try {
        const apiRes= await axios.get('https://api.rawg.io/api/genres?key=81ac20443212457186678c9a04d326c3')
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