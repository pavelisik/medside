import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
const Post = ({ post, displayType }) => {
    switch (displayType) {
        case 'gallery':
            return (_jsx("div", { className: "one-post", children: _jsxs(Link, { to: `/${post.slug}`, children: [post.featured_image && (_jsx("img", { src: post.featured_image, alt: post.title?.rendered, loading: "lazy" })), _jsx("h3", { children: post.title.rendered })] }) }));
        case 'list-item':
            return (_jsx("li", { children: _jsx(Link, { to: `/${post.slug}`, children: post.title.rendered }) }));
        default:
            return null;
    }
};
export default Post;
