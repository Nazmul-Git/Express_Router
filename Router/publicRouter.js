const express = require('express');
const publicRouter = express.Router();
// -----------------router.params-------------
publicRouter.param('user', (req, res, next, id) => {
    req.user = id === '1' ? 'Admin' : 'Anonymous';
    next();
})
// -----------------------------------------------
const log = (req, res, next) => {
    console.log('Someone requested !');
    next();
}

publicRouter.all('*', log);

publicRouter.get('/', (req, res) => {
    res.send('Home Page');
})

// router.route
publicRouter
    .route('/users')
    .all((req, res, next) => {
        console.log('All users..');
        next();
    })
    .get((req, res)=>{
        res.send('GET method.');
    })
    .post((req, res)=>{
        res.send('POST method.');
    })
    .put((req, res)=>{
        res.send('PUT method.');
    })
    .delete((req, res)=>{
        res.send('DELETE method.');
    })

// -----------------router.params-------------
publicRouter.get('/:user', (req, res) => {
    res.send(`User ${req.user}`);
})
// -------------------------------------------

publicRouter.get('/about', (req, res) => {
    res.send('About page');
})

module.exports = publicRouter;