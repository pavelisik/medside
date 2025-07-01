import type { ReactNode } from 'react';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Sidebar from './Sidebar/Sidebar';
import type { WPDataBySlug } from '../types/wpTypes';

interface ContentProps {
    children?: ReactNode;
    data?: WPDataBySlug;
    loading: boolean;
    showBreadcrumbs?: boolean;
    showSidebar?: boolean;
    isNoMatch?: boolean;
}

const Content = ({ children = null, data, loading, showBreadcrumbs = true, showSidebar = true, isNoMatch }: ContentProps) => {
    return (
        <div id="content" className={showSidebar ? undefined : 'nosb'}>
            <div id="center">
                {showBreadcrumbs && loading ? <p>Загрузка ...</p> : <Breadcrumbs data={data} isNoMatch={isNoMatch} />}
                {children}
            </div>
            {showSidebar && <Sidebar data={data} />}
        </div>
    );
};

export default Content;
