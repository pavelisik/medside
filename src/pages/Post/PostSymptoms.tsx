import type { WPSymptomsData } from '../../types/wpTypes';

const PostSymptoms = ({ data }: { data: WPSymptomsData }) => {
    const { title, content, cat_type } = data.data;

    return (
        <>
            <h1>{title}</h1>
            <p>{cat_type}</p>
            <div id="page-content" dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
};

export default PostSymptoms;
