// process.argv   gives you an array of things that are 
// typed into the terminal, including the node command that ran the program

// ************** 

// could do

//      const notes = require('./notes')

// then use ' note.addNote '  
// BUT cleaner to use deconstruction ie.

const {addNote, listNotes, removeNote} = require('./notes')
const yargs = require("yargs")


console.log('*********  process.argv  *******')
console.log(process.argv)
console.log('*********  yargs.argv  *******')
console.log(yargs.argv)
console.log('*********')
let command = process.argv[2]  
// third item is the command eg. '$ node app.js read '

if(command == "add"){
    console.log("adding a note")
    addNote(yargs.argv.notes)
} else if(command == "remove"){
    console.log("remove a note")
    removeNote(yargs.argv.notes)

} else if(command == "read"){
    console.log("read a note")

} else if(command == "list"){
    console.log("list a note")
    listNotes()
}

