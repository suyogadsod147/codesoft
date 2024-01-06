const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser')
const path = require('path')
const cors = require('cors');
const multer = require('multer');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');
const app = express();


// database connections
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected dadatabase successfully")
    } catch (error) {
        console.log(error)
    }
}


// middleware
app.use(cookieParser());
app.use(express.json());
app.use("/images" , express.static(path.join(__dirname, "Images" )));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true  
  }));
app.use('/api/auth', authRoute);
app.use('/api/users' , userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);


// Image Upload
const storage = multer.diskStorage({
    destination: (req , file , cb)=>{
        cb(null , "Images")
    },
    filename:(req , file , cb)=>{
        cb(null , "image1" )
    }
});

const upload = multer({storage:storage}).single("file")

app.post('/api/upload', upload, (req , res)=>{
    try {
        if(!req.file){
            return res.status(400).json('no file upload')
        }
        console.log(req.body)
        res.status(200).json("Image uploaded successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res)=>{
    connectDB();
    console.log('listening on port ' + PORT);
})