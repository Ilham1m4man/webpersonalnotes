import React from "react";
import NoteItem from "./note-item/NoteItem";

function NoteList({ searchNote, note, onDelete, onArchive }) {
    const renderArchivedNote = note.map((notes) => {
        const theTitle = notes.title;
        if (!notes.archived) {
            if (theTitle.toLowerCase().includes(searchNote.toLowerCase())) {
                return (
                    <NoteItem
                        key={notes.id}
                        id={notes.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...notes} />
                );
            }
        }
        return null;
    })

    return (
        <div className="note-list row justify-content-center col-lg-4 col-md-6 col-sm-12">
            {renderArchivedNote}
        </div>
    )
}

export default NoteList;