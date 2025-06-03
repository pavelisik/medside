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
        parent_cat_first?: {};
        parent_cat_second?: {};
        content: string;
        metadata: {};
    };
}

const PostPage = ({ data }: { data?: WPSlug }) => {
    const { title, content } = data!.data;

    return (
        <>
            <div>{title}</div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
};

export default PostPage;
