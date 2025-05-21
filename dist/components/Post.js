import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from 'axios';
function Post({ post }) {
    const [featuredImage, setFeaturedImage] = useState();
    // const [postDate, setPostDate] = useState<string | null>(null);
    useEffect(() => {
        const getImage = async () => {
            try {
                let postLink;
                const postLinks = post?._links;
                postLinks['wp:attachment'] &&
                    (postLink = postLinks['wp:attachment'][0]?.href);
                const response = await axios.get(postLink);
                if (response.data && response.data[0].source_url) {
                    setFeaturedImage(response.data.pop().source_url);
                }
                // if (post.date) {
                //     const dateObj = new Date(post.date);
                //     const formatedDate = dateObj.toLocaleDateString('en-US', {
                //         year: 'numeric',
                //         month: 'long',
                //         day: 'numeric',
                //     });
                //     setPostDate(formatedDate);
                // }
            }
            catch (error) {
                console.log('Error - ', error);
            }
        };
        getImage();
    }, [post]);
    return (_jsxs("div", { children: [featuredImage && (_jsx("img", { src: featuredImage, alt: post.title.rendered })), _jsx("h2", { children: post.title.rendered })] }));
}
export default Post;
