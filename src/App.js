import React from 'react';
import './App.css';
import useRequest from './Hooks/useRequest';

const Posts = ({ post }) => <li><strong>{post.title}</strong> - <i>{post.author}</i></li>
const PostList = ({ posts }) => <ul>{posts.map(post => <Posts post={post} />)}</ul>

function App() {
  const { data, loading, error } = useRequest({ endpoint: 'posts' });
  return (
    <div className="App">
      <header className="App-header">
        {loading && <p>Loading...</p>}
        {!loading && error && <p>Error loading Posts: {error}</p>}
        {!loading && data && <PostList posts={data} />}
      </header>
    </div>
  );
}

export default App;
