import React from 'react';

function Users({ users, postItems }) {
    return (
        <>
            {users.map((user, index) =>
                user.id === postItems.userId ? (
                    <span key={`${user}_${index}`}>
                        {user.name}/{user.username}
                    </span>
                ) : (
                    ''
                ),
            )}
        </>
    );
}

export default Users;
