const db = require("../database/models/index");

module.exports.createBlogs = async (req, res) => {
    console.log(req.body);
    let imgname1 = req.file.filename
    let imgname = `http://127.0.0.1:5000/asset/${imgname1}`
    // console.log(imgname);
    try {
        const blogDetails = await db.models.Blogs.create({ ...req.body, ImgVideo:imgname });
        // console.log(blogDetails);
        return res.status(200).send({
            status: 200,
            message: "successfully created",
            data: blogDetails
        });

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            message: "Unable to create blog",
            status: 400,
        });
    }
}