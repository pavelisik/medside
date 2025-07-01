import SidebarPostsBlock from './SidebarPostsBlock';
import SidebarSocialBlock from './SidebarSocialBlock';
import SidebarCommentsBlock from './SidebarCommentsBlock';
import SidebarRusfondBanner from './SidebarRusfondBanner';
import type { WPDataBySlug } from '../../types/wpTypes';
import { isPostData } from '../../types/wpTypeGuards';

const Sidebar = ({ data }: { data?: WPDataBySlug }) => {
    return (
        <div id="right">
            {data && isPostData(data) && data.data.sim_block_title && data.data.sim_block_array && (
                <SidebarPostsBlock title={data.data.sim_block_title} posts={data.data.sim_block_array} />
            )}
            <SidebarSocialBlock />
            {data && isPostData(data) && data.data.tags_block_array && <SidebarPostsBlock title="Статьи по теме" posts={data.data.tags_block_array} />}
            <SidebarCommentsBlock />
            <SidebarRusfondBanner />
        </div>
    );
};

export default Sidebar;
