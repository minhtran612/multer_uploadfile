const express = require('express');
const multer = require('multer');

const storage = 

const upload = multer()

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, () => console.log('Server started'));

app.get('/',(req,res) => res.render('home'));