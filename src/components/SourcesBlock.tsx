import type { WPBolezniMetadata } from '../types/wpTypes';

interface SourcesBlockProps {
    data?: WPBolezniMetadata['sources'];
}

const SourcesBlock = ({ data }: SourcesBlockProps) => {
    return (
        <>
            <h2>Список источников</h2>
            <ul>
                {data?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default SourcesBlock;
