import React from "react";
import NoteItem from "./note-item/NoteItem";

function NoteList({ note, onDelete, onArchive }) {
    return (
        <div className="note-list">
            {
                note.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note} />
                ))
            }
        </div>
    );
}

export default NoteList;