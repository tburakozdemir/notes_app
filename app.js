const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Yargs version
yargs.version('1.1.0')

//Add command
yargs.command({
    command: 'add',
    describe: 'Add a new node',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler() {
        notes.listNotes();
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    builder:{
        title:{
            describe: 'Node title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse()