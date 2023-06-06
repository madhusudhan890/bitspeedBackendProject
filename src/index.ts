import  dotenv from 'dotenv';
dotenv.config();
import router from "./routes/routes"
import express = require('express');
// import * as mysql from "mysql2"
import creatTable from './models/table'
const app = express()

app.use(router)


creatTable()
const PORT = 3000
app.listen(PORT || 3000,() => {
    console.log(`server is running at port ${PORT}`)
})
