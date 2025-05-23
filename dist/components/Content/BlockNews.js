import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getPosts } from '../../api/requests';
const BlockNews = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        getPosts('/posts', { categories: 36, per_page: 7 })
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
    return (_jsxs("div", { className: "index-block block-3-4", children: [_jsx("h2", { children: _jsx(Link, { to: "/novosti-meditsinyi", children: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B" }) }), loading || error ? (_jsxs(_Fragment, { children: [loading && _jsx("p", { className: "loading", children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." }), error && _jsx("p", { className: "error", children: error })] })) : (_jsxs(_Fragment, { children: [posts.slice(0, 3).map((post) => (_jsx("div", { className: "one-post", children: _jsxs(Link, { to: `/${post.slug}`, children: [post.featured_image && (_jsx("img", { src: post.featured_image, alt: post.title.rendered, loading: "lazy" })), _jsx("h3", { children: post.title.rendered })] }) }, post.id))), _jsx("ul", { className: "list-post", children: posts.slice(3, 7).map((post) => (_jsx("li", { children: _jsx(Link, { to: `/${post.slug}`, children: post.title.rendered }) }, post.id))) })] }))] }));
};
export default BlockNews;
