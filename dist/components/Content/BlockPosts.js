import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getPosts } from '../../api/requests';
const BlockPosts = ({ params, position, children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        getPosts('/posts', params)
            .then((posts) => {
            if (posts)
                setPosts(posts);
        })
            .catch(() => {
            setError('Не удалось загрузить.');
        })
            .finally(() => {
            setLoading(false);
        });
    }, []);
    return (_jsxs("div", { className: `index-block block-4 ${position}`, children: [_jsx("h2", { children: children }), loading || error ? (_jsxs(_Fragment, { children: [loading && _jsx("p", { className: "loading", children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." }), error && _jsx("p", { className: "error", children: error })] })) : (_jsx(_Fragment, { children: posts.map((post) => (_jsx("div", { className: "one-post", children: _jsxs(Link, { to: `/${post.slug}`, children: [post.featured_image && (_jsx("img", { src: post.featured_image, alt: post.title.rendered, loading: "lazy" })), _jsx("h3", { children: post.title.rendered })] }) }, post.id))) }))] }));
};
export default BlockPosts;
