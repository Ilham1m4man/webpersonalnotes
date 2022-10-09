import React from "react";
import ArchivedNoteItemBody from "./ArchivedNoteItemBody";
import ArchivedNoteItemButtons from "./ArchivedNoteItemButtons";

function ArchivedNoteItem({ id, title, body, createdAt, onArchivedDelete, onUnarchive }) {
    return (
        <div className="note-item card">
            <ArchivedNoteItemBody title={title} body={body} createdAt={createdAt} />
            <ArchivedNoteItemButtons id={id} onArchivedDelete={onArchivedDelete} onUnarchive={onUnarchive} />
        </div>
    )
}

export default ArchivedNoteItem;