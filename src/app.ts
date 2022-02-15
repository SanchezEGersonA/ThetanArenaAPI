import path from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Server from "./server/server";
import MongoDB from "./database/mongodb";
import Router from "./router/routes";

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = Number(process.env.DEV_PORT);
const MONGO_URI = String(process.env.MONGODB_URI);

const mongoDB = MongoDB.init(MONGO_URI);
const server = Server.init(PORT);

mongoDB.start();

server.app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    })
);
server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(bodyParser.json());
server.app.use(Router);

server.start(() => {
    console.log(`Corriendo en el puerto ${PORT}`);
});
