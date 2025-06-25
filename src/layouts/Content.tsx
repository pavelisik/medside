import type { ReactNode } from 'react';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Sidebar from './Sidebar/Sidebar';
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
        <div id="content" className={showSidebar ? undefined : 'nosb'}>
            <div id="center">
                {/* тут еще будет заворачиваться еще в такого плана <div itemscope itemtype="https://schema.org/Product"> если там лекарства или другие */}
                {showBreadcrumbs && <Breadcrumbs data={data} isNoMatch={isNoMatch} />}
                {children}
            </div>
            {showSidebar && <Sidebar data={data} />}
        </div>
    );
};

export default Content;
