import React from 'react';
import uuid from 'uuid';

const notes = [
    {
        id: uuid.v4(),
        task: 'Learning React'
    },
    {
        id: uuid.v4(),
        task: 'Fill periodic table'
    }
];

export default () => (
    <ul>
        {notes.map(note => <li key={note.id}>{note.task}</li>)}
    </ul>
);