import mongoose, { mongo } from "mongoose";

export default class MongoDB {

    private MONGO_URI: string;

    constructor(MONGO_URI: string) {
        this.MONGO_URI = MONGO_URI;
    }

    static init (MONGO_URI: string) {
        return new MongoDB(MONGO_URI);
    }

    start() {
        mongoose.connect(this.MONGO_URI)
            .then(db => console.log(`Base de datos iniciado: ${this.MONGO_URI}`))
            .catch(err => console.log(`Error: ${err}`));
    }

}
