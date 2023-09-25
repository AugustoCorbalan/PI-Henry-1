const axios = require('axios');
const {Videogame, Genres} = require('../db.js');
require('dotenv').config();
const { API_KEY } = process.env;

const getApiInfo= async()=>{
    const result=[];
    for(let page=1; page<6; page++){
        const apiUrl= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`)
        apiUrl.data.results.map((el)=>{
         result.push({
             id: el.id,
             name: el.name,
             img: el.background_image,
             genres: el.genres.map((el)=>el.name),
             rating:el.rating
         })
        });  
    }
   return result;
};

const getDbInfo= async()=>{
    return await Videogame.findAll({
        include:{
            model: Genres,
            attributes: ["name"],
            trough:{
                attributes:[]
            }
        }
    });
};

const getTotal= async()=>{
    const apiInfo= await getApiInfo();
    const dbInfo= await getDbInfo(); 
    const infoTotal= apiInfo.concat(dbInfo);
    return infoTotal;
};

module.exports = {getApiInfo, getDbInfo, getTotal};