import styled from 'styled-components';

import { Users } from './index';

const Items = styled.div`
    background-color: rgba(224, 100, 183);
    box-shadow: 0px 10px 40px 0px rgba(224, 100, 183, 1);
    border-radius: 8px;
    width: 500px;
    height: auto;
    margin: 20px;
    padding: 15px 20px;
    color: #f4f4f4;
    h2 {
        cursor: pointer;
    }
`;

function PostsListItem({ postItems, users }) {
    return (
        <>
            <Items>
                <h2>{postItems.title}</h2>
                <p>{postItems.body}</p>
                <Users users={users} postItems={postItems}></Users>
            </Items>
        </>
    );
}

export default PostsListItem;
