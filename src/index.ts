import  dotenv from 'dotenv';
dotenv.config();

import express = require('express');
import * as mysql from "mysql2"

const app = express()



const PORT = 3000
app.listen(PORT || 3000,() => {
    console.log(`server is running at port ${PORT}`)
})
