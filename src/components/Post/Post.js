import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h3>{props.title}</h3>
        <div className="Info">
            <div className="Author">{props.author}</div>
            <p>{props.body}</p>
        </div>
    </article>
);

export default post;