const axios= require('axios');
const {Videogame, Genres} = require('../db.js');

const searchByIdAPI= async (id)=>{
    console.log(id);
    const apiUrl= await axios.get(`https://api.rawg.io/api/games/${id}?key=81ac20443212457186678c9a04d326c3`)
    const apiInfo= await apiUrl.data
    if(parseInt(apiInfo.id) === parseInt(id)){
        const result={
                    name: apiInfo.name,
                    img: apiInfo.background_image,
                    genres: apiInfo.genres.map((el)=>el.name),
                    description: apiInfo.description,
                    date: apiInfo.released,
                    rating: apiInfo.rating,
                    plataformas: apiInfo.platforms.map((el)=>el.platform.name)
                }
        return result;
    }
}

const searchByIdBD = async (id)=>{
    console.log("searchByIdBD")
    let data = await Videogame.findAll({
        include:{
            model: Genres,
            attributes: ["name"],
            through:{
                attributes:[]
            }
        }
    });
    data = data.find((el)=> el.id=== id);
    return data;
};

const searchById= async(id)=>{
    const dataApi= await searchByIdAPI(id);
    if(dataApi) return dataApi;
    const dataBd = await searchByIdBD(id);
    if(dataBd) return dataBd;
    return undefined;
}


module.exports= {searchById};