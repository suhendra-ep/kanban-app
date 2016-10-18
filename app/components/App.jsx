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
        this.deleteNote = this.deleteNote.bind(this);
        this.activateNoteEdit = this.activateNoteEdit.bind(this);
        this.editNote = this.editNote.bind(this);
    }

    addNote() {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New Task'
            }])
        });
    }

    deleteNote(id, e) {
        e.stopPropagation();
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    activateNoteEdit(id) {
        this.setState({
            notes: this.state.notes.map(note => {
                if (note.id === id) {
                    note.editing = true;
                }

                return note;
            })
        });
    }

    editNote(id, task) {
        this.setState({
            notes: this.setState.notes.map(note => {
                if (note.id === id) {
                    note.editing = false;
                    note.task = task;
                }

                return note;
            })
        });
    }
    render() {
        const {notes} = this.state;
        return (
            <div>
                <button onClick={this.addNote}>Add Note</button>
                <Notes
                    notes={notes}
                    onDelete={this.deleteNote}
                    onEdit={this.editNode}
                    onNoteClick={this.activateNoteEdit} />
            </div>
        )
    }
}

export default App;