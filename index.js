const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let notes = [
    {
        content: "Hello guys",
    },
];
app.get("/", (req, res) => {
    res.render("home");
})

app.get("/notes", (req, res) => {
    console.log(notes);
    res.render("notes", { notes });
})

app.get("/notes/add", (req, res) => {
    res.render("add");
})

app.post("/notes", (req, res) => {
    let { content } = req.body;
    console.log(req.body);
    notes.push({ content });
    res.redirect("/notes");
})

const port = 8080;
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})