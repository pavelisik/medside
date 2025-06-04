import type { WPCategoryData } from '../types/wpTypes';

const CategoryPage = ({ data }: { data?: WPCategoryData }) => {
    if (!data || !data.data) return <p>Данные не загружены</p>;
    const { id, name } = data.data;

    return (
        <>
            <div>{id}</div>
            <div>{name}</div>
        </>
    );
};

export default CategoryPage;
