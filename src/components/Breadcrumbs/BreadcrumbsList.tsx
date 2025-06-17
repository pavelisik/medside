import type { ReactNode } from 'react';
import BreadcrumbsItem from './BreadcrumbsItem';

const BreadcrumbsList = ({ children = null }: { children?: ReactNode }) => {
    return (
        <div className="breadcrumbs" aria-label="breadcrumb">
            <div itemScope itemType="https://schema.org/BreadcrumbList">
                <BreadcrumbsItem title="MEDSIDE" slug="/" position={1} />
                <>{children}</>
            </div>
        </div>
    );
};

export default BreadcrumbsList;
