import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            createdAt: '',
            body: '',
            charLimit: 50
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
        this.props.addNewNote(this.state);
    }

    render() {
        let charCounterElm;
        if(this.state.charLimit - this.state.title.length <= 10) {
            charCounterElm = <p className="char-counter d-flex flex-row-reverse red">Character left: {this.state.charLimit - this.state.title.length}</p>
        } else {
            charCounterElm = <p className="char-counter d-flex flex-row-reverse">Character left: {this.state.charLimit - this.state.title.length}</p>
        }
        return (

                <div className="row gy-1">
                    {charCounterElm}
                    <form className='create-note text-center' onSubmit={this.onSubmitHandler}>
                        <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeHandler} maxLength={this.state.charLimit} required />
                        <br></br>
                        <br></br>
                        <textarea type="text" placeholder="Description" value={this.state.body} onChange={this.onBodyChangeHandler} />
                        <br></br>
                        <br></br>
                        <button type="submit">Create</button>
                    </form>
                </div>

        )
    }
}

export default NoteInput;