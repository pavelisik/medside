import type { WPPostData } from '../../types/wpTypes';

const PostPage = ({ data }: { data?: WPPostData }) => {
    if (!data || !data.data) return <p>Данные не загружены</p>;
    const { title, content } = data.data;

    return (
        <>
            <div>{title}</div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
};

export default PostPage;
