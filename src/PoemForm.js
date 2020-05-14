import React from 'react';

export class PoemForm extends React.Component{

    state = {
        name: '',
        content: ''
    }

    setName = e => {
        // console.log(e.target.value)
        this.setState({ name: e.target.value })
    }

    setContent = e => {
        // console.log(e.target.value)
        this.setState({ content: e.target.value })
    }

    handleSubmit = () => {
        // What should we do here?
        this.props.handleAddPoem(this.state)
        this.setState({
            name:'',
            content:''
        })
    }

    render(){
        return (
            <div className="ui form">
                <h1>Create Poem</h1>
                <div className="field">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.setName}/>
                </div>
                <div className="field">
                    <label>Content:</label>
                    <textarea value={this.state.content} onChange={this.setContent}/>
                </div>
                <button className="ui green button" onClick={this.handleSubmit} >Create</button>
            </div>
        )
    }
}