const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added!");
    }else {
        console.log("Note title taken")
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return []
    }
}

const removeNotes = (title) => {
    const listNote = loadNotes()
    const allNotes = listNote.filter((note) => note.title !== title);

    if(listNote.length > allNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(allNotes);
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

const readNote = (title) =>{ 
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.inverse.red("No note found!"));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('All Notes!'))
    notes.forEach((note) =>{
        console.log(note.title);
    })
}


module.exports = {
    addNote     : addNote,
    removeNotes : removeNotes,
    listNotes   : listNotes,
    readNote    : readNote
}