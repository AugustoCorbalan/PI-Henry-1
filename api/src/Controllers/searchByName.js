const axios= require('axios');
const {Videogame, Genres} = require('../db.js');

const searchByNameAPI= async (name)=>{
    const apiUrl= await axios.get(`https://api.rawg.io/api/games?search=${name}&key=81ac20443212457186678c9a04d326c3`)
    let apiInfo= await apiUrl.data.results;
        apiInfo= apiInfo.slice(0,15);
        apiInfo= apiInfo.map((el)=>{
            return{
                name: el.name,
                img: el.background_image,
                genres: el.genres.map((el)=>el.name)
            }
        })
    return apiInfo;
}

const searchByNameBD = async (name)=>{
    let data = await Videogame.findAll({
        include:{
            model: Genres,
            attributes: ["name"],
            through:{
                attributes:[]
            }
        }
    });
    data.filter((el)=> el.name=== name);
    return data;
};

const searchByName= async(name)=>{
    const dataApi= await searchByNameAPI(name);
    const dataBd = await searchByNameBD(name);

    const data= dataApi.concat(dataBd);
    return data;
}


// const searchByName= async (name)=>{
//     let result=[];
//     let page=1;
//     let next=true;
//     while(result.length<15 && next && page<6){
//         console.log("while", page, result.length);
//         const apiUrl= await axios.get(`https://api.rawg.io/api/games?key=81ac20443212457186678c9a04d326c3&page=${page}`)
//         const apiInfo = await apiUrl.data;
//               apiInfo.results.map((el)=>{
//                 if(el.name.includes(name)){
//                     console.log("push")
//                     result.push({
//                         name: el.name,
//                         img: el.background_image,
//                         genres: el.genres.map((el)=>el.name)
//                     })
//                 }
//         });
//         if(!apiInfo.next) next=false;
//         page=page+1;
//     };
  
//     return result;
// }

module.exports= {searchByName};