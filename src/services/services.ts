import mysqlConncetion from '../models/connection';


class Identity{

    async identity_user(req:any ,res:any){
        try {
            // const d = await mysqlConncetion.dataTable.query(
            // )
            
            res.status(200).send("working")
        } catch (error: any) {
            res.status(400).json(error.message)
        }
    }
}

const user_contacts=new Identity
export default user_contacts 