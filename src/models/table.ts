import { RowDataPacket, OkPacket, QueryError, createConnection } from "mysql2"

import connection from "./connection"


const table =
    `
    CREATE TABLE IF NOT EXISTS contact (
        id SERIAL PRIMARY KEY,
        phoneNumber varchar(16),
        email varchar(16),
        linkedId int default null,
        linkPrecedence enum('primary','secondary'),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        is_deleted VARCHAR(16) default null
    )
    `   

const creatTable = async()=>{
    try {
     connection.query(
            table, (err:QueryError , rows:any) => {
                if(err) throw err
                else console.log("Table created")
            })
            
    } catch (error) {
        throw error
    }
}

export default creatTable