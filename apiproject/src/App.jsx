
import React, { useEffect, useState } from 'react'


function App() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts.splice(0,10)))

  },[])

  return (
    <div className="App">
      <h1 className="bg-primary text-white">Fetch API Data</h1>
      <div>
        {
          posts.map((post) => (
            <div key={post.id} className='bg-dark'>  
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
  
}

export default App
