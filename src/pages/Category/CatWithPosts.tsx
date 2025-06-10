import type { WPCategoryData } from '../../types/wpTypes';

const CatWithPosts = ({ data }: { data: WPCategoryData }) => {
    return (
        <>
            <div>СПИСОК КАТЕГОРИЙ С ПОСТАМИ</div>
            <div>{data.data.id}</div>
            <div>{data.data.name}</div>
        </>
    );
};

export default CatWithPosts;
