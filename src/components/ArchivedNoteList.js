import React from "react";
import ArchivedNoteItem from "./archived-note-item/ArchivedNoteItem";

function ArchivedNoteList({ searchNote, archivedNote, onArchivedDelete, onUnarchive }) {
    const renderArchivedNote = archivedNote.map((notes) => {
        const theTitle = notes.title;
        if (notes.archived) {
            if (theTitle.toLowerCase().includes(searchNote.toLowerCase())) {
                return (
                    <ArchivedNoteItem
                        key={notes.id}
                        id={notes.id}
                        onArchivedDelete={onArchivedDelete}
                        onUnarchive={onUnarchive}
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

export default ArchivedNoteList;