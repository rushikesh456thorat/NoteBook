import express from  "express"
import path from "path"
import dotenv  from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMangoDB.js";
import editorRoutes from "./routes/editor.routes.js"
import cookieParser from "cookie-parser";


const __dirname = path.resolve()


const app = express();
const PORT = process.env.PORT || 5000


dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/editor",editorRoutes)
app.use("/api/user", userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req,res) =>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))});

app.listen(PORT, () => {
    connectToMongoDB();

    console.log(`Notebook app listening on port ${PORT}`);
});