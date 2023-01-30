const express = require("express");
const router = express.Router();
// import { nanoid } from 'nanoid';
const createDB = require('../config/db');
const URL = require('../models/urlModels');

const baseURL = "http://localhost:1337/urlapi";

createDB.sync().then(() => {
    console.log("DB IS RUNNING!");
})

router.post('/', async (req,res) => {
    try{
        const { longURL } = req.body; 
        // any calls by user to hostname + id will redirect to longURL
        // longURL to id
        const shortID = Math.random();
        // store in db 
        const shortURL = await URL.create({
            longURL,shortURL:shortID
        });

        return res.status(200).json({
            status: "ok",
            shortURL: `${baseURL}/${shortID}`
        });

    }catch(e){
        console.error(e);
    }
})

module.exports = router;