import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from './components/Container';
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
    return (_jsxs("div", { className: "App", children: [_jsx(Container, {}), posts.map((item, key) => (_jsx(Post, { post: item }, item['id'])))] }));
}
export default App;
