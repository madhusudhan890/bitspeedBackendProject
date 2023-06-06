import {Router} from "express";
const router:Router = Router()
import Identity from "../services/services"



router.route('/')
.get(Identity.identity_user)




export default router