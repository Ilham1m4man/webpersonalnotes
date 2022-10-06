import React from "react";
import DeleteButton from './DeleteButton';
import UnarchiveButton from './UnarchiveButton';

function ArchivedNoteItemButtons({ id, onArchivedDelete, onUnarchive }) {
    return (
        <div className="note-item-buttons">
            <DeleteButton id={id} onArchivedDelete={onArchivedDelete} />
            <UnarchiveButton id={id} onUnarchive={onUnarchive} />
        </div>
    )
}

export default ArchivedNoteItemButtons;