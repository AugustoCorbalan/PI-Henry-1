const { Router } = require('express');

const { getGenres } = require('../Controllers/getGenres');

const router = Router();

router.get('/', async (req, res)=>{
    try {
         genresInDb = await getGenres();
         res.status(200).json(genresInDb);
        
    } catch(error) {
        res.status(500).json(error);
    }
})


module.exports= router;