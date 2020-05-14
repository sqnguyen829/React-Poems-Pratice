import React from 'react';
import { PoemCard } from './PoemCard';

export function PoemList(props){
    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
        {props.poems.map( poem => (
            <PoemCard
                name={poem.name}
                content={poem.content}
                key = { poem.id }
                handleDeletePoem = { props.handleDeletePoem }
                handleEditPoem = { props.handleEditPoem }
                poem = { poem }
            />
        ))}
        </div>
    )
}