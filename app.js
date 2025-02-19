const express=require("express") // first imp line
const app=express()
app.set("view engine", "ejs")
app.get("/",(req,res)=>{
    res.send("homepage has startted");
    })
    app.get("/bini",(req,res)=>{
        // res.json({
        //     message:"hello baby baby",
        //     name:"pretty"
        // })

        res.render("home.ejs")
        })
    app.get("/contact",(req,res)=>{
       res.send("hellooo")
    })

    app.listen(3000,(req,res)=>{
        console.log("port is 3000")
    })