const { Router }= require('express');
const {getApiInfo, getDbInfo, getTotal} = require('../Controllers/getVideogames');
const { searchByName } = require('../Controllers/searchByName.js');
const { searchById } = require('../Controllers/searchById.js');
const { createVideogame } = require('../Controllers/createVideogame.js');

const router= Router();



router.get("/", async (req, res)=>{
    try {
        if(req.query.name){
            const info = await searchByName(req.query.name);
    
            if(info.length>0){
                return res.status(200).json(info);
            }
            else{
                return res.status(400).send('No existen coincidencias')
            };
        }
        else{
            const info = await getTotal();
            return res.status(200).json(info)
        };
    } catch (error) {
        res.status(400).send('Error')
    };
});

router.get("/:id", async (req,res)=>{
    const result= await searchById(req.params.id);
    if(result){
        res.status(200).json(result);
    }
    else{
        res.status(400).send("Error: No se encontro coincidencia")
    }
});

router.post("/", async(req,res)=>{
    const {data}= req.body
    console.log(data);
    const datajs= JSON.parse(data);
    const {name, description, date, rating, platforms, genre} = datajs;
    console.log(name,rating);
    if(name && description && platforms){
        try {
           const videoGame = await createVideogame(name, description, date, raiting, platforms, genre);
           res.status(200).json('Videogame creado con exito');
        } catch (error) {
            res.status(500).json("error");
        }
    }else{
        return res.status(500).json(req);
    }
});

module.exports= router;


