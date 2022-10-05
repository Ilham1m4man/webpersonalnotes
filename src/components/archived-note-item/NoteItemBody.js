import React from "react";

function NoteItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item-body">
            <h3 className="note-item-title">{title}</h3>
            <p className="note-item-createdAt">{createdAt}</p>
            <p className="note-item-body">{body}</p>
        </div>
    );
}

export default NoteItemBody;