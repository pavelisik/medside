import type { WPClinicData } from '../types/wpTypes';

const ClinicPage = ({ data }: { data?: WPClinicData }) => {
    if (!data || !data.data) return <p>Данные не загружены</p>;

    return (
        <>
            <h1>{data.data.title}</h1>
            <div>{data.data.content}</div>
        </>
    );
};

export default ClinicPage;
