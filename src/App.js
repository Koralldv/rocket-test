import React from 'react'
import axios from 'axios';

import Container from './components/layout/Container'
import Input from './components/Input'
import PostsListItem from './components/PostListItem'

function App() {

const [posts, setPosts] = React.useState([])
const [users, setUsers] = React.useState([])
const [search, setSearch] = React.useState('');

React.useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then( ({data}) => {
    setPosts(data);
  })
}, [])

React.useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users').then( ({data}) => {
    setUsers(data);
  })
}, [])


const filterPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
    });


  return (
    <div className="App">
     <Input type="text" placeholder="поиск" onChange={(e) => setSearch(e.target.value)} />
      <Container>
        {filterPosts.map((post, index) => {
          return (
            <PostsListItem key={`${post}_${index}`}>

                <h2>{post.title}</h2>
                  <p>{post.body}</p>

                  {users.map((user, index) => (
                    (user.id === post.userId) ?     
                          <span key={`${user}_${index}`}>
                              {user.name}/{user.username}
                          </span>
                          : ''
                ))}
                
            </PostsListItem>
          );
        })}
      </Container>
    </div>
  );
}

export default App;


