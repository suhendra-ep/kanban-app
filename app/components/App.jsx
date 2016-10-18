import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learning React'
                },
                {
                    id: uuid.v4(),
                    task: 'Fill periodic table'
                }
            ]
        }
    }

    render() {
        const {notes} = this.state;
        return (
            <div>
                <button onClick={() => console.log('Add New Note')}>Add Note</button>
                <Notes notes={notes} />
            </div>
        )
    }
}

export default App;