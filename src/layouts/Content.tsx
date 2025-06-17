import type { ReactNode } from 'react';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Sidebar from '../layouts/Sidebar';
import type { WPDataBySlug } from '../types/wpTypes';

interface ContentProps {
    children?: ReactNode;
    data?: WPDataBySlug;
    showBreadcrumbs?: boolean;
    showSidebar?: boolean;
    isNoMatch?: boolean;
}

const Content = ({ children = null, data, showBreadcrumbs = true, showSidebar = true, isNoMatch }: ContentProps) => {
    return (
        <>
            {showBreadcrumbs && <Breadcrumbs data={data} isNoMatch={isNoMatch} />}
            {children}
            {showSidebar && <Sidebar />}
        </>
    );
};

export default Content;
