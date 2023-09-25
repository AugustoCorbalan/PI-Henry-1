const {Videogame, Genres} = require('../db.js');



const createVideogame = async(name, description, date, rating, platforms, genre)=>{
    try {
        console.log("createVideogame");
        const videogameCreated= await Videogame.create({name, description, date, rating, platforms});
        
        let genresDb= await Genres.findAll({
            where: {name: genre}
        })

        videogameCreated.addGenres(genresDb);

    } catch {
        let error = new Error("Algo salió mal en la base de datos")
        return error;
    }

};


module.exports = {createVideogame};