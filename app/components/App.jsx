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
        };

        this.addNote = this.addNote.bind(this);
        this.deleteNode = this.deleteNode.bind(this);
    }

    addNote() {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New Task'
            }])
        });
    }

    deleteNode(id, e) {
        e.stopPropagation();
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }
    render() {
        const {notes} = this.state;
        return (
            <div>
                <button onClick={this.addNote}>Add Note</button>
                <Notes notes={notes} onDelete={this.deleteNode} />
            </div>
        )
    }
}

export default App;