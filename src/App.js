import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';

class App extends React.Component {
  
  state = {
    poems: poems
  }
  
  render(){
    return (
      <div className="ui container">
        <PoemForm />
        <PoemList />
      </div>
    );
  }

}

export default App;
