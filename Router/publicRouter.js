const express = require('express');
const publicRouter = express.Router();

// -----------------router.params-------------
publicRouter.param('user', (req, res, next, id) => {
    req.user = id === '1' ? 'Admin' : 'Anonymous';
    next();
});
// -----------------------------------------------

// Logging middleware
const log = (req, res, next) => {
    console.log('Someone requested!');
    next();
};

// Apply logging middleware to all routes
publicRouter.all('*', log);

// Home Page route
publicRouter.get('/', (req, res) => {
    res.send('Home Page');
});

// Users route with method chaining
publicRouter
    .route('/users')
    .all((req, res, next) => {
        console.log('All users..');
        next();
    })
    .get((req, res) => {
        res.send('GET method.');
    })
    .post((req, res) => {
        res.send('POST method.');
    })
    .put((req, res) => {
        res.send('PUT method.');
    })
    .delete((req, res) => {
        res.send('DELETE method.');
    });

// Dynamic user route
publicRouter.get('/:user', (req, res) => {
    res.send(`User ${req.user}`);
});

// About page route
publicRouter.get('/about', (req, res) => {
    res.send('About page');
});

module.exports = publicRouter;
