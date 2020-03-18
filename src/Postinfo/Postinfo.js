import React from 'react';
import './Postinfo.css';




const post = (props) => {
    return (
        <tr >
            <td>{props.userId}</td>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.body}</td>
        </tr>
    )
}


export default post;