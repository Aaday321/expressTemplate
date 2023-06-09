import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";

const app = new express();
const PORT = 4015;
const ATLAL_URL = `mongodb+srv://Ade-user-2:admin123@cluster0.oe5ybr1.mongodb.net/test`;
const APP_NAME = ""; 
const COMPAS_URL = `mongodb://127.0.0.1/${APP_NAME}`;

//mongo connection
mongoose.Promise = global.Promise
mongoose.connect(COMPAS_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
//bodyparser setup
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//CORS setup
app.use(cors());



app.get('/', (req, res) =>{
    res.send(
    `<div style='width: 100vw; height:100vh; display: flex; justify-content: center; align-items: center;'>\
    <p style= 'font-size: 50px;' >You look lost kid. Go to front end<p/>\
    </div>`
    )
});

app.listen(PORT, ()=>{
        console.log(`The ${APP_NAME} server is running on port: ${PORT}`)
        console.log("SERVER IS RUNNING - SUCCESS")
    }
);

