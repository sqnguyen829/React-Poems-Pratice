import React from 'react';
import { PoemCard } from './PoemCard';

export function PoemList(){
    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
        {[ /*  Replace this with an array of poems */ ].map( poem => (
            <PoemCard
                name={poem.name}
                content={poem.content}
            />
        ))}
        </div>
    )
}