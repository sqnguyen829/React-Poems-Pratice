import React from 'react';
import { EditPoemButton } from './EditPoemButton';

export function PoemCard(props){
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{props.name}</div>
            </div>
            <div className="content">
                {props.content}
            </div>
            <div className="content">
                <button className="ui red button" onClick = { () => props.handleDeletePoem(props.poem) }>Delete</button>
                <EditPoemButton 
                    poem ={ props.poem }
                    handleEditPoem = { props.handleEditPoem }/>
            </div>
        </div>
    )
}