import React from "react";
import NoteItem from "./note-item/NoteItem";

function NoteList({ note, onDelete, onArchive }) {
    const renderArchivedNote = note.map((notes) => {
        if (!notes.archived) {
            return (
                <NoteItem
                    key={notes.id}
                    id={notes.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    {...notes} />
            );
        }
        return null;
    })

    return (
        <div className="note-list">
            {renderArchivedNote}
        </div>
    )
}

export default NoteList;