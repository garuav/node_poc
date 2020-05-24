const chalks = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');


// Customize yargs version
yargs.version('1.1.0');

// Create add command 

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new Notes ');
    }
})

// Create remove command 

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a Note');
    }
});

// Create a list command

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing all Notes')
    }
})

// Create a  read command

yargs.command({
    command: 'read', 
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a Note');
    }
})
console.log(yargs.argv);