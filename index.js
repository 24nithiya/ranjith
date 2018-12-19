var path =require('path');
var express= require('express');
var multer = require('multer');
var app= express();
var Storage= multer.diskStorage({
    destination: './public/upload',
    filename: (req, file,cb)=>{
//cb-callback     
   cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));

    }
})
var upload = multer({
    storage:Storage
}).single('file');

app.use(express.static(__dirname+"/public"));
app.post('/uploadFile',upload,(req,res,next)=>{
      res.send("Uploaded file: "+req.file.filename);
})
app.listen(3000, ()=> console.log(" server is running at http://localhost:3000"))