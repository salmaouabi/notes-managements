import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editNoteIndex, setEditNoteIndex] = useState(null);
  const [editNoteValue, setEditNoteValue] = useState("");

  // Charger les notes depuis le localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Sauvegarder les notes dans le localStorage
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  // Ajouter une nouvelle note
  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  // Supprimer une note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Modifier une note
  const editNote = (index) => {
    setEditNoteIndex(index);
    setEditNoteValue(notes[index]);
  };

  // Sauvegarder la modification de la note
  const saveEdit = () => {
    const updatedNotes = [...notes];
    updatedNotes[editNoteIndex] = editNoteValue;
    setNotes(updatedNotes);
    setEditNoteIndex(null);
    setEditNoteValue("");
  };

  return (
    <div className="App">
      <h1>Gestion des Notes</h1>

      {/* Ajouter une nouvelle note */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Ajouter une note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Ajouter</button>
      </div>

      {/* Liste des notes */}
      <div className="notes-list">
        {notes.length === 0 ? (
          <p>Aucune note ajoutée</p>
        ) : (
          <ul>
            {notes.map((note, index) => (
              <li key={index}>
                {editNoteIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editNoteValue}
                      onChange={(e) => setEditNoteValue(e.target.value)}
                    />
                    <button onClick={saveEdit}>Sauvegarder</button>
                  </div>
                ) : (
                  <>
                    <span>{note}</span>
                    <button onClick={() => editNote(index)}>Modifier</button>
                    <button onClick={() => deleteNote(index)}>Supprimer</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
