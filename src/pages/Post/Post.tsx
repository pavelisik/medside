import type { WPPostData } from '../../types/wpTypes';

const Post = ({ data }: { data?: WPPostData }) => {
    if (!data || !data.data) return <p>Данные не загружены</p>;
    const { title, content } = data.data;

    return (
        <>
            <h1>{title}</h1>
            <div id="page-content" dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
};

export default Post;
