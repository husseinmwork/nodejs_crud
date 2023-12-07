const db = require('../config/db')
class UserModel {
    //this function use in controller
    static async getusers() {

        //just this means await 
        //class promise take  resolve and reject this means await
        return new Promise(resolve => {
            //[] this mean i dont need send into database any think 
            //i need just get all data in table users and return result into promise
            db.query("select * from users", [], (error, result) => {
                // console.log(error) //if not error this print null
                if (!error) //if error not null return   resolve(result)
                    resolve(result)
            })
        })
    }

    static async adduser(name, email, pass) {
        return new Promise(resolve => {
            db.query("insert into users (name,email,password) value(?,?,?)", [name, email, pass], (error, result) => {
                if (!error)
                    resolve(true)
                else {
                    console.log("error", error)
                    resolve(false)

                }

            })
        })
    }

    static async deleteuser(id) {
        return new Promise(resolve => {
            db.query("delete from users where id=?", [id], (error, result) => {
                if (!error)
                    resolve(true)
                else
                    resolve(false)
            })
        })
    }

    static async updateuser(id, name, email, password) {
        return new Promise(resolve => {
            db.query("update users set name=?,email=?,password=? where id=?", [name, email, password, id], (error, result) => {
                if (!error)
                    resolve(result)
            })
        })
    }

}

module.exports = UserModel
