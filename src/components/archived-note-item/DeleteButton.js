import React from 'react';

function DeleteButton({ id, onArchivedDelete }) {
    return <button className='note-item-delete' onClick={() => onArchivedDelete(id)}>Delete</button>
}

export default DeleteButton;