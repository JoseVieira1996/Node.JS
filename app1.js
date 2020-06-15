const express = require('express')
const app1 = express()
const Pokemon = require('./models/Pokemon')


//multer
const multer = require('multer')
const upload = multer({dest:'uploads/'})

//handlebars
const handlebars = require('express-handlebars')
app1.engine('handlebars', handlebars ({defaultLayout:'main'}))
app1.set('view engine', 'handlebars')

//body-parser
const bodyParser = require('body-parser')
app1.use(bodyParser.urlencoded({extended: false}))
app1.use(bodyParser.json()) 



//------------------------



//rotas
app1.get ('/pokemon', function(req,res){
    Pokemon.findAll().then(function(pokemons){
    res.render(__dirname + '/views/pokemon.handlebars',{ pokemons: pokemons})
    })
})


//render vai para a pagina 
app1.get ('/cad-pokemon', function(req,res){
    res.render(__dirname + '/views/cad-pokemon.handlebars')
})




app1.post('/add-pokemon',function(req,res){
    Pokemon.create({
        nome: req.body.nome,
        cor: req.body.cor,
        imagem:req.body.imagem,
    }).then(function(){
        res.redirect('/pokemon')
        //res.send('Pokemon cadastrado com sucesso!')
    }).catch(function(erro){
        res.send('Erro: pokemon não cadastrado ' + erro)
    })
}) 



    //res.send('Nome: ' + req.body.nome + '<br>Valor: '+ req.body.valor + '<br>')

app1.get('/del-pokemon/:id', function (req,res){
    Pokemon.destroy({
        where:{'id': req.params.id}
    }).then(function(){
        res.redirect('/pokemon')
        //res.send('Pokemon excluido com sucesso')
    }).catch(function(erro){
        res.send('ERRO '+ erro)
    })
})

app1.listen(8083)