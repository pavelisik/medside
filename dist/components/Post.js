import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from 'axios';
function Post({ post }) {
    const [featuredImage, setFeaturedImage] = useState();
    const [postDate, setPostDate] = useState(null);
    const getImage = async () => {
        try {
            const response = await axios.get(post?._links['wp:attachment'][0]?.href);
            if (response.data && response.data[0].source_url) {
                setFeaturedImage(response.data.pop().source_url);
            }
            if (post.date) {
                const dateObj = new Date(post.date);
                const formatedDate = dateObj.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });
                setPostDate(formatedDate);
            }
        }
        catch (error) {
            console.log('Error - ', error);
        }
    };
    useEffect(() => {
        getImage();
    }, [post]);
    return (_jsxs("div", { children: [featuredImage && (_jsx("img", { src: featuredImage, alt: post.title.rendered })), _jsx("h2", { children: post.title.rendered }), _jsx("div", { children: postDate }), _jsx("div", { dangerouslySetInnerHTML: { __html: post.excerpt.rendered } })] }));
}
export default Post;
