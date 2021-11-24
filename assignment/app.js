const express = require('express');
require('dotenv').config();
const { mailController } = require('./controllers/mailController')



const app = express();
app.get('/', (req, res) => res.send('Home is best'))



app.post('/mail', mailController)

let PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server port: ${PORT}`))