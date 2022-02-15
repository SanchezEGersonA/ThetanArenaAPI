import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../model/userModel";

const router = Router();

/**
 * Find a user by his/her email and password
 */
router.post('/login', (req: Request, res: Response) => {

    let body = req.body;
    
    User.findOne({ user_email: body.user_email }, (err: Error, user_db: any) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                message: err
            });
        }

        if (!user_db) {
            return res.status(400).json({
                ok: false,
                message: "Email address or password incorrect!"
            });
        }

        if (!bcrypt.compareSync(body.user_password, user_db.user_password)) {
            return res.status(400).json({
                ok: false,
                message: "Email address or password incorrect!"
            });
        }

        res.status(200).json({
            ok: true,
            message: user_db.toJSON()
        });

    });

});

module.exports = router;
