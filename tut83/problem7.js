//Problem 7
function saveNoteToLocalStorage(note) {
  localStorage.setItem("note", JSON.stringify(note));
}

// JSON.stringify(note) converts the note object into a string.
// localStorage.setItem() saves that string in the browser under the key "note"

const note = {
  title: "Shopping List",
  content: "Buy milk and bread"
};

saveNoteToLocalStorage(note);