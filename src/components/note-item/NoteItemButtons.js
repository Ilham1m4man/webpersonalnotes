import React from "react";
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItemButtons({ id, onDelete, onArchive }) {
    return (
        <div className="note-item-buttons d-flex justify-content-evenly">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} />
        </div>
    )
}

export default NoteItemButtons;