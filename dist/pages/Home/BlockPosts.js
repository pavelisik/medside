import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Post from './Post';
import usePosts from '../../hooks/usePosts';
import Skelet from '../../components/ui/Skelet';
const BlockPosts = ({ params, titleLinesCount = 3, blockStyle = '', children = null }) => {
    const { posts, loading, error } = usePosts(params);
    return (_jsxs("div", { className: blockStyle, children: [children && _jsx("h2", { children: children }), loading ? (_jsx(Skelet, { skeletClass: "posts", titleLinesCount: titleLinesCount })) : error ? (_jsx("p", { className: "error", children: error })) : (posts.map((post) => _jsx(Post, { post: post, displayType: "gallery" }, post.id)))] }));
};
export default BlockPosts;
