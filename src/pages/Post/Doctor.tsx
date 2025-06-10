import type { WPDoctorData } from '../../types/wpTypes';

const Doctor = ({ data }: { data?: WPDoctorData }) => {
    if (!data || !data.data) return <p>Данные не загружены</p>;

    return (
        <>
            <h1>{data.data.title}</h1>
            <div>{data.data.content}</div>
        </>
    );
};

export default Doctor;
