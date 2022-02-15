import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../model/userModel";

const router = Router();

/**
 * Function to add a new User
 */
router.post('/user', (req: Request, res: Response) => {

    let body = req.body;
    let newUser = new User({
        user_firstname: body.user_firstname,
        user_lastname: body.user_lastname,
        user_gender: body.user_gender,
        user_email: body.user_email,
        user_password: bcrypt.hashSync(body.user_password, 10),
        user_birthday: body.user_birthday
    });

    newUser.save((err, user_db) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                message: err
            });
        }
        
        res.status(200).json({
            ok: true,
            message: user_db.toJSON()
        });

    });

});

module.exports = router;
