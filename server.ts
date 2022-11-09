import express from 'express';
import { engine } from 'express-handlebars';
const app = express()

const port = 3000

app.use('/', express.static(__dirname + '/public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/home', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
    
})