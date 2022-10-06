import React from "react";
import ArchivedNoteItem from "./archived-note-item/ArchivedNoteItem";

function ArchivedNoteList({ archivedNote, onArchivedDelete, onUnarchive }) {
    const renderArchivedNote = archivedNote.map((notes) => {
        if (notes.archived) {
            return (
                <ArchivedNoteItem
                    key={notes.id}
                    id={notes.id}
                    onArchivedDelete={onArchivedDelete}
                    onUnarchive={onUnarchive}
                    {...notes} />
            );
        }
        return null;
    })

    return (
        <div className="archived-note-list">
            {renderArchivedNote}
        </div>
    )

}

export default ArchivedNoteList;