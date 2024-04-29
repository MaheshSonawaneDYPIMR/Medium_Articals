import uploadOnCloudinary from "../services/cloudinary.service.js"
import { Image } from "../models/post.model.js"
const postImage = async(req,res)=>{
    try {
    console.log(req.file)
    if (req.file.path){
        const imagepath = await uploadOnCloudinary(req.file.path)
        console.log("Image uploaded successfully on cloudinary:", imagepath)
        const image = await Image.create({
            image: imagepath.url
        })
        res.status(200).json(image)
    }
    else{
        res.status(400).json({
            message: "No file uploaded"
        })
    }

   } catch (error) {
    console.log("error",error)
    res.status(500).json({
        message: "Something went wrong"
    })
   }
}

export {postImage};