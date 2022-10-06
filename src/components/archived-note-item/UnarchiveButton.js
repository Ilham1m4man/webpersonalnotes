import React from 'react';

function UnarchiveButton({ id, onUnarchive }) {
    return <button className='note-item-archive' onClick={() => onUnarchive(id)}>Unarchive</button>
}

export default UnarchiveButton;