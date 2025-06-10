import type { WPCategoryData } from '../../types/wpTypes';

const CatList = ({ data }: { data: WPCategoryData }) => {
    return (
        <>
            <div>СПИСОК КАТЕГОРИЙ</div>
            <div>{data.data.id}</div>
            <div>{data.data.name}</div>
        </>
    );
};

export default CatList;
