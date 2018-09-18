const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };


  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  console.log('here is the title', title);
  var notes = fetchNotes();
  var findNote = notes.filter( (note) => note.title === title )
  return findNote[0];

};

var removeNote = (title) => {
  var notes = fetchNotes();
  // var duplicateNotes = notes.filter( () => {
  //   if (note.title === title)
  //
  // });

  var doneNotes = notes.filter( (note) => note.title !== title);
  saveNotes(doneNotes);

  return notes.length !== doneNotes.length;
};

var logNote = (note) => {
  debugger;
  console.log('----')
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
