import type { WPPageData } from '../../types/wpTypes';

const Page = ({ data }: { data?: WPPageData }) => {
    if (!data || !data.data) return <p>Данные не загружены</p>;

    return (
        <>
            <h1>{data.data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.data.content }} />
        </>
    );
};

export default Page;
