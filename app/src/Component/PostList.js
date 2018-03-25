import React from 'react';
import data from '../data.js'

function PostList(props) {
    const PostListItem = data.map((data, i) => {
        if (i < props.count) {
            return (
                <li className="post_list_item" key={data.id}>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                </li>);
            } else {
                return undefined;
            }
    });
    return (
        <ul className="post_list">
            {PostListItem}
        </ul>
    )
}


export default PostList