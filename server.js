const {https} = require('firebase-functions')
const {default: next} = require('next')
//const express = require('express');
//const cors = require('cors');

//const app = express();

// Automatically allow cross-origin requests
//app.use(cors({ origin: true }));
//app.get('/api/one', (req, res) => res.json({name:"alfie", age:12, city:"makati"}));
// Add middleware to authenticate requests
//app.use(myMiddleware);

const isDev = process.env.NODE_ENV !== 'production'

const server = next({
    environment:isDev,
    const:{distDir: '.next'}
})

const nextJsHandler = server.getRequestHandler();


exports.nextServer = https.onRequest((req,res)=>{
    return server.prepare().then(()=>{
        return nextJsHandler(req,res)
    })
})


