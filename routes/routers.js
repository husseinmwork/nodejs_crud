const usercontroller = require('../controllers/UserController')
const router = require('express').Router();

router.get("/", (req, resp, next) => {
    resp.send("home ");
})

router.get("/alluser", usercontroller.getAllUsers)
router.post("/adduser" , usercontroller.createUser)
router.post("/deleteuser" , usercontroller.deleteUser)
router.post("/edituser" , usercontroller.updateUser)

module.exports = router