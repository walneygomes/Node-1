const express= require('express')
const html =  express();

const produtos = require('./produtos');

produtos("",html)



html.listen(2000)




