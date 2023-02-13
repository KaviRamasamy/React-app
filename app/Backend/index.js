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
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors({origin:"https://react-app-index.vercel.app"}));
app.use(cors({origin:"https://react-app-index-kaviramasamy.vercel.app"}));
app.use(cors({origin:"https://react-app-index-git-main-kaviramasamy.vercel.app"}));
app.use(express.json());
app.use(UserRoute);
const apiPort= 'https://react-app-nine-topaz.vercel.app'
app.listen(apiPort, ()=> console.log('Server up and running...'));