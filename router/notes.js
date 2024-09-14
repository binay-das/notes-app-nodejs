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


router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        res.render("", {

            note: note

        })

    } catch (err) {
        res.status(500).send("Error fetching the note");
    }

})

router.post("/", async (req, res) => {
    try {
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content
        });

        await newNote.save();
        res.redirect('/notes/all-notes');

    } catch (err) {
        res.status(500).send("Error saving the note");
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Note.findByIdAndDelete(id);
        res.redirect('/notes/all-notes');

    } catch (err) {
        res.status(500).send("Error deleting the note");
    }
})

router.get('/edit/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const note = await Note.findById(id);

        res.render('edit', {
            note: note
        })

    } catch (err) {
        res.status(500).send("Error fetching the note for edit");
    }
})

router.put('/edit/:id', async (req, res, next) => {
    const id = req.params.id;
    const note = await Note.findById(id);

    if (!note) {
        return res.status(404).send("Note not found");
    }

    note.title = req.body.title;
    note.content = req.body.content;

    await note.save();
    res.redirect('/notes/all-notes');
});

module.exports = router;