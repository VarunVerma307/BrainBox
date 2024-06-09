const express=require('express');
const app=express();
const userRoutes=require("./routes/User");
const profileRoutes=require("./routes/Profile");
const courseRoutes=require("./routes/Course");
const paymentRoutes=require("./routes/Payment");
const contactRoutes=require("./routes/Contact");

const database=require("./config/database");
const cookieparser=require("cookie-parser");
const cors=require('cors');
const fileupload=require("express-fileupload");
const {cloudinaryConnect}=require("./config/cloudniary");
const dotenv=require("dotenv");

dotenv.config();

const PORT=process.env.PORT || 4000;

database.connect();

app.use(express.json());
app.use(cookieparser());
app.use(
    cors({
origin:"http://localhost:3000",
credentials:true
    })
)

app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

cloudinaryConnect();

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/payment",paymentRoutes);
app.use("/api/v1/contact",contactRoutes);

app.get("/",(req,res)=>{
return res.json({
    sucess:true,
    messaage:"Your server is up and running..."
})
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})