const fs = require('fs');
const chalks = require('chalk');
const addNote = (title, body) => {
 const notes =  loadNotes();
 const duplicateNote = notes.find( (note) =>  note.title === title )
  if(!duplicateNote) {
    notes.push({
        title: title,
        body: body
     });
     saveNotes(notes);
     console.log(chalks.white.bgGreen(`Note  ${title}  added Successfully !`))

  } else {
     console.log(chalks.white.bgRed('Note title taken'));


  }

}

const removeNote = (title) => {
    console.log('title = ',title)
    const notes =  loadNotes();
    const uniqueNotes = notes.filter((note) =>  note.title !== title );
    if(uniqueNotes.length === notes.length) {
        console.log(chalks.white.bgRed('Note not found!'));
    } else {
        saveNotes(uniqueNotes);
        console.log(chalks.white.bgGreen(`Note  ${title} Removed`))
    }
}


saveNotes = (notes) => {
        fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const notesJson = fs.readFileSync('notes.json').toString();
        return(JSON.parse(notesJson));
    }catch (error) {
        return [];
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if(notes.length > 0) {
        console.log(chalks.white.bgGreen('Your Notes \n'));
        console.log(chalks.black.bgYellow('Title') + '\t ' + chalks.black.bgYellow('Body' + '\n')  );
        return notes.forEach(element => console.log( chalks.white(element.title) + '\t ' + chalks.white(element.body) ));
    } else {
        console.log(chalks.white.bgRed('Note not found!'));
    }
   
}
const readNote = (title) => {
    const notes = loadNotes();
    const currentNote = notes.find( (note) =>  note.title === title );
    if(currentNote) {
        console.log(chalks.black.bgYellow('Title') + '\t ' + chalks.black.bgYellow('Body' + '\n')  );
        console.log( chalks.white(currentNote.title) + '\t ' + chalks.white(currentNote.body) )
    } else {
        console.log(chalks.white.bgRed('Note not found!'));
    }
}
module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}