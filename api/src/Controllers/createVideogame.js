const {Videogame, Genres} = require('../db.js');



const createVideogame = async(name, description, date, raiting, platforms, genre)=>{
    try {
        console.log(name, description, date, raiting, platforms);
        const videogameCreated= await Videogame.create({name, description, date, raiting, platforms});
        
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