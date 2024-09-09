const express = require('express');
const path = require('path');
const app = express();
const port = 3333;

//configurando o bodyParser para interpretar os dados do formulario
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port, ()=>{
    console.log("Servidor inicializado na porta http://localhost:" + port)
})

app.post('/login', (req, res)=>{
    const {nome, sobrenome} = req.body;
    console.log(nome)
    console.log(sobrenome)
})
