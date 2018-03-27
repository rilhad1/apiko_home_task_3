import React from 'react';
import data from '../data.js';

function PostList(props) {
    const PostListItem = data.splice(0, props.count).map((data, i) => {
            return (
                <li className="post-card" key={data.id}>
                <a href="">
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </a>
                </li>
                );
    });
    return (
        <ul className="post-list">
            {PostListItem}
        </ul>
    );
};


export default PostList;
