const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

//public static path
const staticpath = path.join(__dirname,'../public')
const templates_path = path.join(__dirname,'../templates/views')//templates me convert kiya views ko
const partials_path = path.join(__dirname,'../templates/partials')//templates me convert kiya views ko

app.set('view engine','hbs')
app.set('views',templates_path);//express ko batya covert kiya karke
app.use(express.static(staticpath));
hbs.registerPartials(partials_path);
//routing
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/whether',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404error',{
        errormsg:'Oops! Page Not Found',
    });
})


app.listen(port,(req,res)=>{
    console.log(`Listening at ${port} ...`);
})
