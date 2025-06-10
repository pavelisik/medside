import BreadcrumbItem from './BreadcrumbItem';
import type { WPDataBySlug } from '../types/wpTypes';
import { isCategoryData, isPageData } from '../types/wpTypeGuards';

interface BreadcrumbsProps {
    data?: WPDataBySlug;
}

const Breadcrumbs = ({ data }: BreadcrumbsProps) => {
    if (data && isCategoryData(data)) {
        const { name, parent_name, parent_slug } = data.data;
        return (
            <div className="breadcrumbs">
                <div itemScope itemType="https://schema.org/BreadcrumbList">
                    <BreadcrumbItem title="MEDSIDE" slug="/" position={1} />
                    {parent_name && parent_slug && (
                        <BreadcrumbItem title={parent_name} slug={`/${parent_slug}`} position={2} />
                    )}
                    <BreadcrumbItem title={name} position={parent_slug ? 3 : 2} showSeparator={false} />
                </div>
            </div>
        );
    } else if (data && isPageData(data)) {
        const { title } = data.data;
        return (
            <div className="breadcrumbs">
                <div itemScope itemType="https://schema.org/BreadcrumbList">
                    <BreadcrumbItem title="MEDSIDE" slug="/" position={1} />
                    <BreadcrumbItem title={title} position={2} showSeparator={false} />
                </div>
            </div>
        );
    }
};

export default Breadcrumbs;
