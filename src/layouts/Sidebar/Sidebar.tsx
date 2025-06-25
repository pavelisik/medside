import SidebarSimilarBlock from './SidebarSimilarBlock';
import type { WPDataBySlug } from '../../types/wpTypes';
import { isPostData } from '../../types/wpTypeGuards';

const Sidebar = ({ data }: { data?: WPDataBySlug }) => {
    return (
        <div id="right">
            {data && isPostData(data) && data.data.sim_block_title && data.data.sim_block_array && (
                <SidebarSimilarBlock title={data.data.sim_block_title} posts={data.data.sim_block_array} />
            )}
        </div>
    );
};

export default Sidebar;
