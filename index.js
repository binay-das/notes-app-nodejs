const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

let allNotes = [
    {
        content: "Hello guys",
    },
];
app.get("/", (req, res)=>{
    res.render("home");
})

app.get("/allNotes",(req,res)=>{
    console.log(allNotes);
    res.render("allNotes", {allNotes});
})

const port = 8080;
app.listen(port, ()=>{
    console.log(`Listening to port ${port}...`)
})