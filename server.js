// importar express
const express = require('express');

//iniciar express
const app = express();

const appName = "curso-angular-basico";

//local onde será feito o build no heroku
const outputPath = `${__dirname}/dist/${appName}`;

//seta o diretório de build para servir conteúdo estático
app.use(express.static(outputPath));

//redireciona as requisições para o index.html
app.get("/*", (req, res) => {
    res.sendFile(`${outputPath}/index.html`);
});

// express vai ouvir na porta que o Heroku disponibilizar
app.listen(process.env.PORT);