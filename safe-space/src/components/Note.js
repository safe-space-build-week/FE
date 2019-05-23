import React from 'react';
import EditNote from './EditNote';

export default function Note(props) {
    

    return (
        <div>
            {props.data.text}
            
        </div>
    )
}