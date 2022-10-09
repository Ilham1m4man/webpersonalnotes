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
            archivedNote: getArchivedData(),
            titleSearch: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedDeleteHandler = this.onArchivedDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onAddArchivedNoteHandler = this.onAddArchivedNoteHandler.bind(this);
        this.onTitleSearchChangeHandler = this.onTitleSearchChangeHandler.bind(this);
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

    onTitleSearchChangeHandler(event) {
        this.setState(() => {
            return {
                titleSearch: event.target.value,
            }
        });
    }


    render() {
        let noteElm;
        let archivedNoteElm;

        if (this.state.note.length === 0) {
            noteElm = <p className="no-note">There is no note</p>;
        } else {
            noteElm = <NoteList searchNote={this.state.titleSearch} note={this.state.note} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />;
        }

        if (this.state.archivedNote.length === 0) {
            archivedNoteElm = <p className="no-note">There is no archived note</p>;
        } else {
            archivedNoteElm = <ArchivedNoteList searchNote={this.state.titleSearch} archivedNote={this.state.archivedNote} onArchivedDelete={this.onArchivedDeleteHandler} onUnarchive={this.onUnarchiveHandler} />;
        }

        return (
            <div className="personal-note-app">
                <header>
                    <h2>Personal Note App</h2>
                </header>
                <form className='search-note d-flex justify-content-center'>
                    <input className="w-25" type="text" placeholder="Search note's title" value={this.state.titleSearch} onChange={this.onTitleSearchChangeHandler} />
                </form>
                <div className="container w-50 pb-5 pt-5">
                    <h2>Create New Note</h2>
                    <NoteInput addNewNote={this.onAddNewNoteHandler} />
                </div>
                <div className="container w-75 pb-5 pt-5">
                    <h2 className="your-note">Your Note</h2>
                    {noteElm}
                </div>
                <div className="container w-75 pb-5 pt-5">
                    <h2 className="your-note">Archived</h2>
                    {archivedNoteElm}
                </div>
            </div>
        )
    }
}

export default PersonalNoteApp;