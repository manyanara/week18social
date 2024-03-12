const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const Port = 3001;
const app= express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', ()=> {
    app.listen(Port, ()=> {
        console.log(`Server listening to port ${Port}`);
    });
});
