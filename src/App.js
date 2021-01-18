import React from 'react'
import axios from 'axios';

import {Container, InputBlock, Filter} from './components/index'

function App() {

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

const [posts, setPosts] = React.useState([])
const [users, setUsers] = React.useState([])
const [search, setSearch] = React.useState('');

  return (
    <div className="App">
     <InputBlock setSearch={setSearch}/>
      <Container>
        <Filter  posts={posts} users={users} search={search}/>
      </Container>
    </div>
  );
}

export default App;


