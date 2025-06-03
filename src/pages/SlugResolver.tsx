import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getSlug } from '../services/api/requests';

interface WPSlug {
    type: string;
    subtype: string;
    data: {
        id: number;
        slug: string;
        title: string;
        date: string;
        featured_image: string;
        post_author: {};
        categories: any[];
        parents_count: number;
        parent_cat_first: {};
        parent_cat_second: {};
        content: string;
        metadata: {};
    };
}

const SlugResolver = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<WPSlug>();

    useEffect(() => {
        // if (!slug) return;
        getSlug<WPSlug>(slug as string).then((data) => {
            if (data) {
                setPost(data);
                // console.log(data);
            }
        });
        // eslint-disable-next-line
    }, []);

    // console.log(post);

    return <div>{post?.data.title}</div>;
};

export default SlugResolver;
