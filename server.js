const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage(
{
        destination: (req,file,cb) => cb(null,'./public'),
        filename: (req,file,cb) => {
            cb(null,`${Date.now()}${file.originalname}`);
        }
});
function fileFilter(req,file,cb){
    if(file.mimetype === "image/png"){
         cb(null, true);
    }
    else{
       cb(new Error('I don\'t have a clue!'));
    }
    
}
const limits = {
    fileSize : 100
}
const upload = multer({storage, fileFilter,limits});

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, () => console.log('Server started'));

app.get('/',(req,res) => res.render('home'));

app.post('/upload', upload.single('avatar'), (req,res) => res.send("SUCCEED"));