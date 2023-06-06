import {createConnection} from "mysql2"

// create the connection to database
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password:"password",
    database: 'project'
  });


export default connection