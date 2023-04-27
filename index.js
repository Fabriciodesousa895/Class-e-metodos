const express = require('express')
const app = express()



//view engine
app.set('view engine','ejs');
//static public
app.use(express.static('public'));
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.get('/',((req,res)=>{
    res.status(200).render('index')
}))








app.listen(4040,(err)=>{
    if(err){
        console.log('Houve um erro ao iniciar o servidor')
    }else{
        console.log('Servidor rodando')
    }
})