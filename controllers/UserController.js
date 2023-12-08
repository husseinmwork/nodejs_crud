const User = require('../models/user');


exports.getAllUsers = (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    }).catch(error => {
        res.status(500).json({ error: "error for get all user" });
    })
};

exports.createUser = (req, res) => {
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword = req.body.password;
    User.create({ name: username, email: useremail, password: userpassword }).then(newUser => {
        res.json(newUser);
    }).catch(error => {
        res.status(500).json({ error: "error for added new user", error });
    })
};

exports.deleteUser = (req, res) => {
    User.destroy({ where: { id: req.body.id } }).then(deleteRows => {
        console.log("delete done", deleteRows);
        res.json(deleteRows);
    }).catch(error => {
        console.error("error for delete user", error)
    })
};

exports.updateUser = (req, res) => {
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword = req.body.password;
    const userid = req.body.id;
    User.update({ email: useremail, name: username, password: userpassword }, { where: { id: userid } }).then(updateRows => {
        console.log("updated user", updateRows);
        res.json(updateRows);
    }).catch(error => {
        console.log("error for update user", error)
    })
};