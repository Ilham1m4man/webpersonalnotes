import React from "react";

function ArchivedNoteItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item-body card-body">
            <h3 className="note-item-title card-title" numberoflines={1} title={title}>
                {title.length < 18 ? `${title}` : `${title.substring(0, 18)}...`}</h3>
            <p className="note-item-createdAt">{createdAt}</p>
            <p className="note-item-body card-text">{body}</p>
        </div>
    );
}

export default ArchivedNoteItemBody;