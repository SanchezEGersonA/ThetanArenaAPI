import { Schema, model } from "mongoose";
import Hero from "../interface/heroInterface";

const HeroSchema = new Schema<Hero>({

    hero_user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: [true, "The thetan hero should be assingned to a user!"]
    },

    hero_name: {
        type: String,
        required: [ true, "The heros's name is required!" ]
    },

    hero_rarity: {
        type: Schema.Types.ObjectId,
        ref: "thetan_hero_rarity",
        required: [ true, "The hero's rarity is required!" ]
    },

    hero_skin: {
        type: Schema.Types.ObjectId,
        refL: "thetan_hero_skin",
        required: [ true, "The hero's skin is required!" ]
    },

    hero_battles: {
        type: Number,
        required: [true, "The total number of battles of the hero is required!"]
    },

    hero_usedbattles: {
        type: Number,
        required: [ true, "The total number of battles used of the hero is required!" ]
    },
    hero_completed: {
        type: Boolean,
        default: false,
        required: false
    }

});

export default model<Hero>("Hero", HeroSchema);
