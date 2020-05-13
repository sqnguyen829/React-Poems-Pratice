import React from 'react';
import { EditPoemButton } from './EditPoemButton';

export function PoemCard(){
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">Replace this with Poem Name</div>
            </div>
            <div className="content">
                Replace this with Poem Content
            </div>
            <div className="content">
                <button className="ui red button">Delete</button>
                <EditPoemButton poem={  { /* Replace this empty object with a poem object */ }  }/>
            </div>
        </div>
    )
}