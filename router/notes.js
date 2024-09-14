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
    const id = req.params.id;
    
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



router.delete('/:id', async (req, res) => {
    const id = rq.params.id;
    await Note.findByIdAndDelete(id);
    res.redirect('/notes/all-notes');
})

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const note = await Note.findById(id);

    res.render('edit', {
        note: note
    })
})

router.put('/edit/:id', async (req, res, next) => {
    const id = req.params.id;
    const note = await Note.findById(id);

    next();
}, saveNoteAndRedirect);

function saveNoteAndRedirect() {
    return async (req, res) => {
        let note = req.Note;

        note.title = req.body.title;
        note.content = req.body.content;

        try {
            await Note.save();
            res.redirect('/notes/all-notes');
        } catch(err) {
            console.log(`Error in put request: ${err}`);
            return res.status(500).send("Error in put request");
        }
    }
}


module.exports = router;