import { Router, Request, Response } from "express";
import Hero from "../model/heroModel";

const router = Router();

/**
 * Add new hero assign to a user
 */
router.post('/hero/:user_id', (req: Request, res: Response) => {

    let user_id = req.params.user_id;
    let body = req.body;
    let newHero = new Hero({
        hero_user: user_id,
        hero_name: body.hero_name,
        hero_rarity: body.hero_rarity,
        hero_skin: body.hero_skin,
        hero_battles: body.hero_battles,
        hero_usedbattles: body.hero_usedbattles,
    });

    newHero.save((err, hero_db) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                message: err
            });
        }

        res.status(200).json({
            ok: true,
            message: hero_db
        });

    });

});
