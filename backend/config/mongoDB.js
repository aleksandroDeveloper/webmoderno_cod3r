const mongoose = require('mongoose')
// o arquivo .env tem o caminho absoluto para a conexão com o mongoDB
const { mongo } = require('../.env')

mongoose.connect(mongo, {useNewUrlParser: true})
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[om')
    })