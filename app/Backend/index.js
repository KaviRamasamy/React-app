import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect('mongodb+srv://KaviRamasamy:Abcd$1234@react-app.n7g9bo5.mongodb.net/data?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log("error-logs: ", error));
db.once('open', () => console.log('Database Connected...'));


let cors = require('cors');    
const corsOpts = {
    origin: ['https://react-app-pi-seven.vercel.app'],
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));
app.use(express.json());
app.use(UserRoute);
// const apiPort= 'https://react-app-peach-kappa.vercel.app'
//app.listen(5000, ()=> console.log('Server up and running...'));