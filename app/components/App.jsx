import React from 'react';
import Notes from './Notes';

export default () => (
    <div>
        <button onClick={() => console.log('Add New Note')}>Add Note</button>
        <Notes />
    </div>
);