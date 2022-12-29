const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouth= require('./videogamesRouth.js');
const genresRouth = require('./genresRouth.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogamesRouth );
router.use('/genres', genresRouth);



module.exports = router;
