const express = require('express');
const path = require('path');

const app = express();

// Server apenas o arquivo stático do repo dist
app.use(express.static('./dist/app'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist'})
})

// Começa a escutar na porta padrão do heroku
app.listen(process.env.PORT || 8080);