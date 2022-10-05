import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            createdAt: '',
            body: ''
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className='create-note' onSubmit={this.onSubmitHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeHandler} />
                <input type="text" placeholder="Description" value={this.state.body} onChange={this.onBodyChangeHandler} />
                <button type="submit">Create</button>
            </form>
        )
    }
}

export default NoteInput;