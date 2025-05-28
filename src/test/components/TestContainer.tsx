import { useState, useEffect } from 'react';
import Skeleton from '../../components/Skelet';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
import TestCard from './TestCard';

const TestContainer = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            {loading ? <Skeleton skeletClass="" /> : <TestCard />}
        </div>
    );
};

export default TestContainer;
