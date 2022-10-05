import React from 'react';

function DeleteButton({ id, onDelete }) {
    return <button className='note-item-delete' onClick={() => onDelete(id)}>Delete</button>
}

export default DeleteButton;