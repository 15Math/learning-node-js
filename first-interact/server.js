const express = require('express');
const app = express();
const port = 3333;

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(port, ()=>{
    console.log("Servidor inicializado na porta http://localhost:" + port)
})