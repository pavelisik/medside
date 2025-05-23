import { useState, useEffect } from 'react';
import axios from 'axios';
import type { WP_REST_API_Post, WP_REST_API_Object_Links } from 'wp-types';

function PostOld({ post }: { post: WP_REST_API_Post }) {
    const [featuredImage, setFeaturedImage] = useState();
    // const [postDate, setPostDate] = useState<string | null>(null);

    useEffect(() => {
        const getImage = async () => {
            try {
                let postLink: string | undefined;
                const postLinks: WP_REST_API_Object_Links = post?._links;
                postLinks['wp:attachment'] && (postLink = postLinks['wp:attachment'][0]?.href);

                const response = await axios.get(postLink as string);

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
            } catch (error) {
                console.log('Error - ', error);
            }
        };
        getImage();
    }, [post]);

    return (
        <div>
            {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
            <h2>{post.title.rendered}</h2>
            {/* <div>{postDate}</div> */}
            {/* <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /> */}
        </div>
    );
}

export default PostOld;
