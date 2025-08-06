import type { WPBolezniMetadata } from '../types/wpTypes';

interface DataListItemProps {
    label: string;
    data: WPBolezniMetadata['doctors'] | WPBolezniMetadata['diets'] | string;
    hrefPrefix?: string;
    titlePrefix?: string;
}

const DataListItem = ({ label, data, hrefPrefix = '', titlePrefix = '' }: DataListItemProps) => {
    return (
        <>
            {typeof data === 'string' ? <strong>{label}</strong> : label}
            {/* если data массив - выводим списком */}
            {Array.isArray(data) &&
                data?.map(({ name, slug }, index, arr) => (
                    <span key={slug}>
                        <a href={`/${hrefPrefix}${slug}`} title={`${titlePrefix}${name}`} target="_blank" rel="noopener noreferrer">
                            {name}
                        </a>
                        {index < arr.length - 1 ? ', ' : ''}
                    </span>
                ))}
            {/* если data строка - просто выводим */}
            {typeof data === 'string' && data}
        </>
    );
};

export default DataListItem;
