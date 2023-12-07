const userModel = require('../models/User')
const { validationResult } = require('express-validator')
//how to run this classes 
//route->controller->models
class UserController {


    static async getalluser(req, res) {
        var results = await userModel.getusers();

        if (results)
            res.send(results)

    }

    static async adduser(req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        var x = await userModel.adduser(name, email, password)
        if (x)
            res.send('add successfully')
        else
            res.send('add failed')
    }

    static async deleteuser(req, res) {
        const error = validationResult(req);
        const id = req.body.id;

        if (!error.isEmpty()) {
            res.json(error.array())
        } else {

            if (id)
                var result = await userModel.deleteuser(id);
            if (result)
                res.send('delete done')
            else
                res.send('faield to delete user')

        }


    }

    static async updateuser(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        var result = await userModel.updateuser(id, name, email, password)
        if (result)
            res.send('data edited successfully')
        else
            res.send('failed to update user')
    }
}
module.exports = UserController