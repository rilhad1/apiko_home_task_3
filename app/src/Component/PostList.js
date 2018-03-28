import React from 'react';
import data from '../data.js';

function PostList(props) {
    const PostListItem = data.slice(0, props.count).map((item, i) => {
        return (
            <li className="post-card" key={item.id}>
                <a href="">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
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
