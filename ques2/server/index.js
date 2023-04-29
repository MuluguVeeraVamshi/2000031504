const express =require("express");
const app=express();
const bodyparser =require("body-parser");
const cors=require("cors");
const mysql=require("mysql");

// const db=mysql.createPool({
    
// });

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'veeru@2002',
    database: 'project'
})


app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json("Hellow from backend..");
    const sql="select * from train";
    db.query(sql, (err,data)=>{
        if(err) return app.json("Error");
        return res.json(data);
    })
});

app.listen(5000,()=>{
    console.log("server is running on 5000 port");
})