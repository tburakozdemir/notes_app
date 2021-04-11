const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>{
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
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

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return []
    }
}

const removeNotes = (title) =>{
    const listNotes = loadNotes()
    const allNotes = listNotes.filter((note) =>{
        return note.title !== title
    })

    if(listNotes.length > allNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(allNotes);
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}

module.exports = {
    getNotes    : getNotes,
    addNote     : addNote,
    removeNotes : removeNotes
}