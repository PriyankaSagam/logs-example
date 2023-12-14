require('dotenv').config(); // Load ENV Variables
const express = require('express'); //import express
const methodOverride = require('method-override'); 
const mongoose = require('mongoose')

const app = express();

const Logs = require('./models/logs');
const jsxViewEngine = require('jsx-view-engine');

//global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

//MiddleWare
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

//near top, around the other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>")
})

//Index--

app.get('/logs',async (req, res) => {
    // res.send("<h1>Index Page</h1>")
    //  res.render('Index');
    try {
        const foundLogs = await Logs.find({});
        res.status(200).render('Index', {logs: foundLogs});
    } catch (err) {
        res.status(400).send(err);
    }
})

//New-route
app.get('/new', (req, res) => {
    // res.send("<h1>New Page</h1>")
     res.render('New')
});

// D - DELETE - PERMANENTLY removes a fruit from the db
app.delete('/logs/:id', async (req, res)=> {
    // res.send('deleting...');
    try{
        const deletedLogs = await Logs.findByIdAndDelete(req.params.id);
        console.log(deletedLogs)
        res.status(200).redirect('/logs');
    } catch (err) {
        res.status(400).send(err);
    }

})



//Create-

app.post('/logs',async (req, res) => {
    if(req.body.shipIsBroken === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.shipIsBroken = true;
    } else {  //if not checked, req.body.readyToEat is undefined
        req.body.shipIsBroken = false;
    }
    
    try {
        const createdLogs = await Logs.create(req.body);
        res.status(200).redirect('/logs');
    } catch (err) {
        res.status(400).send(err);
    }
    // console.log(req.body);
    // res.send('data received');
    //  res.send(req.body);

});


   
//Show--

app.get('/logs/:id',async (req, res) => {
    //  res.send("<h1>Show Page</h1>")
    try {
        const foundLog = await Logs.findById(req.params.id);
        res.render('Show', {log: foundLog});
    } catch (err) {
        res.status(400).send(err);
    }

})



app.listen(3000, () => {
    console.log('listening');
});