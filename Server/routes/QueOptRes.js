const express = require("express") ;
const router = express.Router() ;

import { field1,field2,field3,field4,field5 } from "../controllers/Question";

router.get("/field1" , field1) ; 
router.get("/field2" , field2) ; 
router.get("/field3" , field3) ; 
router.get("/field4" , field4) ; 
router.get("/field5" , field5) ; 


