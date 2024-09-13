const express = require('express');
const router = express.Router();
const Note = require('../models/notes');

router.get("/all-notes", async (req, res) => {
    try {
        const notes = await Note.find({});
        res.render("notes", { notes });
    } catch (err) {
        res.status(500).send("Error fetching notes");
    }
    
})

router.get("/add", (req, res) => {
    res.render("add");
})

router.post("/", async (req, res, next) => {
    try {
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content
        });

        await newNote.save();
        res.redirect('/notes/all-notes');

    } catch (err) {
        res.status(500).send("Error saving teh note");
    }
});

module.exports = router;