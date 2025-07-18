import type { ReactNode } from 'react';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Sidebar from './Sidebar/Sidebar';
import type { WPSidebarData, WPBreadcrumbsData } from '../types/wpTypes';

interface ContentProps {
    children?: ReactNode;
    sidebarData?: WPSidebarData;
    breadcrumbsData?: WPBreadcrumbsData;
    showBreadcrumbs?: boolean;
    showSidebar?: boolean;
    loading?: boolean;
    isNoMatch?: boolean;
}

const Content = ({ children = null, sidebarData, breadcrumbsData, showBreadcrumbs = true, showSidebar = true, loading, isNoMatch }: ContentProps) => {
    return (
        <div id="content" className={showSidebar ? undefined : 'nosb'}>
            <div id="center">
                {showBreadcrumbs && loading ? <p>Загрузка ...</p> : <Breadcrumbs data={breadcrumbsData} isNoMatch={isNoMatch} />}
                {children}
            </div>
            {showSidebar && <Sidebar data={sidebarData} />}
        </div>
    );
};

export default Content;
