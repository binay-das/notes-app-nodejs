const express = require("express");
const app = express();
const path = require("path");
const connectToMongoDB = require('./connect');
const noteRoute = require('./router/notes');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


connectToMongoDB('mongodb://localhost/notes')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(`Error ${err}`);
    })



app.use('/notes', noteRoute);

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/about", (req, res) => {
    res.render("about");
})

const port = 8080;
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})