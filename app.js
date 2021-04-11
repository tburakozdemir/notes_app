const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0')

//Create add command
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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note!')
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function () {
        console.log('Listing all notes!')
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    handler: function() {
        console.log('Reading the note!')
    }
})
// add, remove, read, list

yargs.parse()