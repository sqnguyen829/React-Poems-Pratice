import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';

class App extends React.Component {
  
  state = {
    poems: poems
  }

  handleAddPoem = (poem) => {
    let newId = this.state.poems[this.state.poems.length - 1].id + 1
    poem.id = newId
    this.setState({
      poems: [...poems, poem]
    })
  }

  handleDeletePoem = (poem) => {
    let poems = this.state.poems.filter(pm => pm.id !== poem.id)
    this.setState({
      poems: poems
    })
  }

  handleEditPoem = (poem, content) => {
    //my solution
    this.state.poems.map( pm => {
      if(pm.id === poem.id){
        pm.content = content
      }
    })
    this.setState({
      poems: this.state.poems
    })

    //using slice
    // let index = this.state.poems.indexOf(poem)
    // this.setState({
    //   poems: [
    //     ...this.state.poems.slice(0, index),
    //     { ...poem, content: content},
    //     ...this.state.poems.slice(index + 1)
    //   ]
    // })

    //using map
    // this.setState({
    //   poems: this.state.poems.map( pm => {
    //     if(pm === poem){
    //       return { ...poem, content: content}
    //     } else {
    //       return poem
    //     }
    //   })
    // })
  }
  
  render(){
    return (
      <div className="ui container">
        <PoemForm handleAddPoem = { this.handleAddPoem }/>
        <PoemList 
          poems = { this.state.poems }
          handleDeletePoem = { this.handleDeletePoem }
          handleEditPoem = { this.handleEditPoem }
          />
      </div>
    );
  }

}

export default App;
