const input = document.querySelector("input");
const button = document.querySelector("button");
const notesContainer = document.querySelector(".notes-container");

let noteToBeEdited = null;

button.addEventListener("click", addingNote);

function displayNotes() {
  let notesList;
  if (localStorage.getItem("notes") === null) notesList = [];
  else {
    notesList = JSON.parse(localStorage.getItem("notes"));
  }

  if (notesList.length > 0) {
    notesList.forEach((note) => {
      const newNote = createANewNote(note);
      notesContainer.appendChild(newNote);
    });
  }
}

function addingNote() {
  const note = input.value.trim();
  if (note.length === 0) {
    alert("Invalid input");
    return false;
  }
  if (button.innerText === "Edit Note") {
    editNote();
  } else {
    const newNote = createANewNote(note);
    notesContainer.appendChild(newNote);

    saveNoteLocally(note);
    input.value = "";
  }
}
function createANewNote(note) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = note;
  li.appendChild(p);

  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  deleteButton.innerText = "Delete";
  editButton.innerText = "Edit";
  editButton.classList.add("btn", "edit-btn");
  deleteButton.classList.add("btn", "delete-btn");

  li.appendChild(deleteButton);
  li.appendChild(editButton);
  return li;
}
function saveNoteLocally(note) {
  let notesList;
  if (localStorage.getItem("notes") === null) notesList = [];
  else {
    notesList = JSON.parse(localStorage.getItem("notes"));
  }
  notesList.push(note);
  localStorage.setItem("notes", JSON.stringify(notesList));
}

function deleteLocally(noteToBeDeleted) {
  let notesList;
  let noteText = noteToBeDeleted.childNodes[0].textContent;
  if (localStorage.getItem("notes") === null) notesList = [];
  else {
    notesList = JSON.parse(localStorage.getItem("notes"));
  }
  let indexOfText = notesList.indexOf(noteText);
  notesList.splice(indexOfText, 1);
  localStorage.setItem("notes", JSON.stringify(notesList));
}

function editNote() {
  let noteList = JSON.parse(localStorage.getItem("notes"));
  let index = noteList.indexOf(noteToBeEdited);
  noteList[index] = input.value;
  localStorage.setItem("notes", JSON.stringify(noteList));

  const notesElems = notesContainer.querySelectorAll("li");
  notesElems.forEach((note) => {
    const text = note.querySelector("p").textContent;
    if (text === noteToBeEdited) {
      note.querySelector("p").textContent = input.value;
      noteToBeEdited = null;
    }
  });

  input.value = "";
  button.innerText = "Add Note";
}

document.addEventListener("DOMContentLoaded", () => {
  displayNotes();
});

notesContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("delete-btn")) {
    const noteToBeDeleted = event.target.parentElement;
    notesContainer.removeChild(noteToBeDeleted);
    deleteLocally(noteToBeDeleted);
  } else if (target.classList.contains("edit-btn")) {
    noteToBeEdited = event.target.parentElement.childNodes[0].textContent;
    input.focus();
    input.value = noteToBeEdited;
    button.innerText = "Edit Note";
  } else {
    return;
  }
});
