import express from "express";

const app = express();

const PORT = 5000;

app.get("/" , (req,res)=>{
    return res.status(200).json({
        success : true,
        message : "Home route of Yogorys"
    });
});

app.get("/health" , (req, res)=>{
    return res.status(200).json({
        success : true,
        message : "Yogorys-Backend is running"
    });
});

app.listen(PORT , ()=>{
    console.log(`Yogorys-Backend Server is up and running at PORT : ${PORT}`)
});