const express = require('express')
const hbs = require('hbs')

const app = express()
const path = require('path');
const port = process.env.PORT  || 3000;

app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials/',function(){});


app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('home',{
    nombre:"Efrain",
    titulo:"Curso de Node"
  });
})

app.get('/generic',(req,res)=>{
  res.render('generic',{
    nombre:"Efrain",
    titulo:"Curso de Node"
  });
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:"Efrain",
    titulo:"Curso de Node"
  });
})

app.get('*', (req, res) => {
  res.send('404 - Pagina no encontrada en este sservidor')
})

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`)
})