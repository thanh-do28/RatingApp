const express = require("express");
const multer = require('multer')
const blogs = require("../controllers/blogs.controller");

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // console.log(file);
      cb(null, "public/asset");
    },
    filename: function (req, file, cb) {
        if(!file){
            cb(null, null);
        }else{
            const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9) + ".jpg";
            cb(null,file.fieldname + "-" + uniqueSuffix);
        }
    },
});

const upload = multer({ storage: storage,});

router.post("/",upload.single('ImgVideo'), blogs.createBlogs);

module.exports = router;