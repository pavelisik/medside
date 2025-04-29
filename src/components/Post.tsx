import { useState, useEffect } from 'react';
import axios from 'axios';

function Post({ post }: { post: any }) {
    const [featuredImage, setFeaturedImage] = useState();
    const [postDate, setPostDate] = useState<string | null>(null);

    const getImage = async () => {
        try {
            const response = await axios.get(
                post?._links['wp:attachment'][0]?.href
            );

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
        } catch (error) {
            console.log('Error - ', error);
        }
    };

    useEffect(() => {
        getImage();
    }, [post]);

    return (
        <div>
            {featuredImage && (
                <img src={featuredImage} alt={post.title.rendered} />
            )}
            <h2>{post.title.rendered}</h2>
            <div>{postDate}</div>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
    );
}

export default Post;
