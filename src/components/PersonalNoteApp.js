import React from "react";
import { getInitialData, getArchivedData, showFormattedDate } from '../utils/DataSource';
import ArchivedNoteList from "./ArchivedNoteList";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class PersonalNoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getInitialData(),
            createdAt: showFormattedDate(props),
            archivedNote: getArchivedData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedDeleteHandler = this.onArchivedDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onAddArchivedNoteHandler = this.onAddArchivedNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const note = this.state.note.filter(note => note.id !== id);
        this.setState({ note });
    }

    onArchivedDeleteHandler(id) {
        const archivedNote = this.state.archivedNote.filter(archivedNote => archivedNote.id !== id);
        this.setState({ archivedNote });
    }

    onAddArchivedNoteHandler(addArchivedNote) {
        this.setState((prevState) => {
            return {
                archivedNote: [
                    ...prevState.archivedNote,
                        addArchivedNote
                ]
            }
        });
        this.onDeleteHandler(addArchivedNote.id);
    }

    onAddNoteHandler(addNote) {
        this.setState((prevState) => {
            return {
                note: [
                    ...prevState.note,
                        addNote
                ]
            }
        });
        this.onArchivedDeleteHandler(addNote.id);
    }

    onArchiveHandler(id) {
        let archived = this.state.note.map((note) => {
            if (note.id === id) {
                note.archived = !note.archived;
                this.onAddArchivedNoteHandler(note); 
            }
            return note;
        });
        this.setState({ ...archived });
    }

    onUnarchiveHandler(id) {
        let archived = this.state.archivedNote.map((note) => {
            if (note.id === id) {
                note.archived = !note.archived;
                this.onAddNoteHandler(note); 
            }
            return note;
        });
        this.setState({ ...archived });
    }

    onAddNewNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                note: [
                    ...prevState.note,
                    {
                        id: +new Date(),
                        title,
                        createdAt: showFormattedDate(new Date()),
                        body,
                        archived: false,
                    }
                ]
            }
        });
    }
    

    render() {
        let noteElm;
        let archivedNoteElm;

        if (this.state.note.length === 0) {
            noteElm = <p className="no-note">There is no note</p>;
        } else {
            noteElm = <NoteList note={this.state.note} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />;
        }

        if(this.state.archivedNote.length === 0) {
            archivedNoteElm = <p className="no-archived-note">There is no archived note</p>;
        } else {
            archivedNoteElm = <ArchivedNoteList archivedNote={this.state.archivedNote} onArchivedDelete={this.onArchivedDeleteHandler} onUnarchive={this.onUnarchiveHandler} />;
        }

        return (
            <div className="personal-note-app">
                <h2>Create New Note</h2>
                <NoteInput addNewNote={this.onAddNewNoteHandler} />
                <h2>Your Note</h2>
                {noteElm}
                <h2>Archived</h2>
                {archivedNoteElm}
            </div>
        )
    }
}

export default PersonalNoteApp;