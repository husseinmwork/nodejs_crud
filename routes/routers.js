const usercontroller = require('../controllers/UserController')
const {check} = require('express-validator')
const router = require('express').Router();

router.get("/", (req, resp, next) => {
    resp.send("hussein ..........");
})

router.get("/alluser", usercontroller.getalluser)
router.post("/adduser" , usercontroller.adduser)
//express-validator this new package 
//validator for id if not exists return this message and if id is not number return second message
router.post("/deleteuser" ,[check('id').exists().withMessage("id is requierd ").isNumeric().withMessage("id should be only number")], usercontroller.deleteuser)
router.post("/edituser" , usercontroller.updateuser)
module.exports = router