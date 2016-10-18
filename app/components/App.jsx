import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

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
    <div>
        <button onClick={() => console.log('Add New Note')}>Add Note</button>
        <Notes notes={notes}/>
    </div>
);