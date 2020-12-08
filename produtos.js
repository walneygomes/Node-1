const produtos= require('./basedados')

module.exports= (text, app)=>{


    const salvar = (req, res)=>{
        req.on('data', (dado)=>{
            produtos.push(JSON.parse(dado))
            res.send("Inserido"+produtos.length)
        })
    }
    const obter = (req, res)=>{
        res.send(produtos);
        
    }

    app.get('/produtos', obter);

    app.post('/produto', salvar);


    return {obter, salvar}



}