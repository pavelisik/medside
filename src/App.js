import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);

    // const fetchPosts = async () => {
    //     const res = await axios.get(
    //         'https://medside.ru/wp-json/wp/v2/posts/162120'
    //     );
    // };

    const fetchPosts = () => {
        axios.get('https://medside.ru/wp-json/wp/v2/posts').then((res) => {
            setPosts(res.data);
        });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="App">
            {posts.map((item, key) => (
                <Post post={item} key={item.id} />
            ))}
        </div>
    );
}

export default App;
