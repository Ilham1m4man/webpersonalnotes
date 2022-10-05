import React from "react";
import { getInitialData } from '../utils/DataSource';
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class PersonalNoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const note = this.state.note.filter(note => note.id !== id);
        this.setState({ note });
    }

    onArchiveHandler(id) {
        const note = this.state.note.filter(note => note.archived !== true);
        console.log(note);
        this.setState({ note });
    }

    onAddNoteHandler({ title, createdAt, body }) {
        this.setState((prevState) => {
            return {
                note: [
                    ...prevState.note,
                    {
                        id: +new Date(),
                        title,
                        createdAt,
                        body,
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="personal-note-app">
                <h2>Create New Note</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>Your Note</h2>
                <NoteList note={this.state.note} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                <h2>Archived</h2>
            </div>
        )
    }
}

export default PersonalNoteApp;