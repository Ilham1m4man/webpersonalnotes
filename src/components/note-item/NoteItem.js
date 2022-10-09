import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemButtons from "./NoteItemButtons";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive }) {
    return (
        <div className="note-item card">
            <NoteItemBody title={title} body={body} createdAt={createdAt} />
            <NoteItemButtons id={id} onDelete={onDelete} onArchive={onArchive} />
        </div>
    )
}

export default NoteItem;