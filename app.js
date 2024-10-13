const express= require('express');
const adminRouter= require('./Router/adminRouter');
const publicRouter = require('./Router/publicRouter');

const app= express();

app.use('/', publicRouter);
app.use('/admin', adminRouter);

// custom error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3001, ()=>{
    console.log('Listening on port 3000');
})

