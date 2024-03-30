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


// async function seedDBAndStartServer() {
//     try {
//       await client.connect();
//       console.log('Connected successfully to MongoDB');
//       db = client.db(dbName);
//       // Drops any documents, if they exist
//       await db.collection('groceryList').deleteMany({});
//       // Adds data to database
//       const res = await db.collection('groceryList').insertMany(data);
//       console.log(res);
  
//       app.listen(port, () => {
//         console.log(`Example app listening at http://localhost:${port}`);
//       });
//     } catch (err) {
//       console.error('Mongo connection error: ', err.message);
//     }
//   }
  
//   seedDBAndStartServer();
  
