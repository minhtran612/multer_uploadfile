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
    fileSize : 10000 * 1024
}
const upload = multer({storage, fileFilter,limits});
module.exports = upload;