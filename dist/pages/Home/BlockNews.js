import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
import Post from './Post';
import usePosts from '../../hooks/usePosts';
import Skelet from '../../components/ui/Skelet';
const BlockNews = () => {
    const { posts, loading, error } = usePosts({ categories: 36, per_page: 7 });
    return (_jsxs("div", { className: "index-block block-3-4", children: [_jsx("h2", { children: _jsx(Link, { to: "/novosti-meditsinyi", children: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u044B" }) }), loading ? (_jsx(Skelet, { skeletClass: "news" })) : error ? (_jsx("p", { className: "error", children: error })) : (_jsxs(_Fragment, { children: [posts.slice(0, 3).map((post) => (_jsx(Post, { post: post, displayType: "gallery" }, post.id))), _jsx("ul", { className: "list-post", children: posts.slice(3, 7).map((post) => (_jsx(Post, { post: post, displayType: "list-item" }, post.id))) })] }))] }));
};
export default BlockNews;
