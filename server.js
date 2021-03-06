const express = require('express');
const multer = require('multer');
const upload = require('./upload_file');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, () => console.log('Server started'));

app.use('/trangA',require('./trangA'));

app.get('/',(req,res) => res.render('home'));
//const avatarUpload = upload.single('avatar');
const imageArray = upload.array('avatar');
/*app.post('/upload',(req,res) => {
    avatarUpload(req,res,(err) => {
        if(err) return res.send('ERROR: ' +  err);
        res.send('SUCCEED');
    });
});*/

app.post('/upload', (req,res) => {
    imageArray(req,res,err => {
         if(err) return res.send('ERROR: ' +  err);
         res.send(req.files);
    })
});
