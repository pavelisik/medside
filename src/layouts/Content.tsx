import type { ReactNode } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../layouts/Sidebar';
import type { WPDataBySlug } from '../types/wpTypes';

interface ContentProps {
    children?: ReactNode;
    data?: WPDataBySlug;
    showBreadcrumbs?: boolean;
    showSidebar?: boolean;
}

const Content = ({ children = null, data, showBreadcrumbs = true, showSidebar = true }: ContentProps) => {
    return (
        <>
            {showBreadcrumbs && <Breadcrumbs data={data} />}
            {children}
            {showSidebar && <Sidebar />}
        </>
    );
};

export default Content;
