const fs = require('fs')

const addNote = (myNotes) => {
   console.log('---> notesjs addNote')
    // console.log(myNotes)

    const allNotes = loadNotes()
    
    allNotes.push({Reminder:myNotes})
    
    saveNotes(allNotes)

}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const notesJSON = dataBuffer.toString()
        return JSON.parse(notesJSON)
    }
    catch(e){
        return []
    }
}


const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}



const listNotes = () => {
    console.log('--->notesjs list')
    const allNotes = loadNotes()

    allNotes.map((note) => {
        console.log(note.Reminder)
    })
}



const removeNote = (deleteNote) => {

    const allNotes = loadNotes()

    const notesToKeep = allNotes.filter((note) => {
        return note.Reminder !== deleteNote
    })

    saveNotes(notesToKeep)
}



module.exports = {
    addNote,
    listNotes,
    removeNote
}