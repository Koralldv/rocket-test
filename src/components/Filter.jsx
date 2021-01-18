import React from 'react';
import { PostListItem } from './index';

function Filter({ users, posts, search }) {
    const filterPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            {filterPosts.map((postItems, index) => {
                return (
                    <PostListItem
                        postItems={postItems}
                        users={users}
                        key={`${postItems}_${index}`}
                    />
                );
            })}
        </>
    );
}

export default Filter;
