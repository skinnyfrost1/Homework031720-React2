import React from 'react';
import './Postinfo.css';




const post = (props) => {
    return (
        <tr className="Post">
            <td>userId: {props.userId}</td>
            <td>id: {props.id}</td>
            <td>title: {props.title}</td>
            <td>body: {props.body}</td>
        </tr>
    )
}


export default post;