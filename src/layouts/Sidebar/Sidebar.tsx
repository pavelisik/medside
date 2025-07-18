import SidebarPostsBlock from './SidebarPostsBlock';
import SidebarSocialBlock from './SidebarSocialBlock';
import SidebarCommentsBlock from './SidebarCommentsBlock';
import SidebarRusfondBanner from './SidebarRusfondBanner';
import type { WPSidebarData } from '../../types/wpTypes';

interface SidebarProps {
    data?: WPSidebarData;
}

const Sidebar = ({ data }: SidebarProps) => {
    const { sim_block_title, sim_posts, tags_posts } = data || {};

    const hasSimPosts = Array.isArray(sim_posts) && sim_posts.length > 0 && !!sim_block_title;
    const hasTagPosts = Array.isArray(tags_posts) && tags_posts.length > 0;

    return (
        <div id="right">
            {hasSimPosts && <SidebarPostsBlock title={sim_block_title} posts={sim_posts} />}
            <SidebarSocialBlock />
            {hasTagPosts && <SidebarPostsBlock title="Статьи по теме" posts={tags_posts} />}
            <SidebarCommentsBlock />
            <SidebarRusfondBanner />
        </div>
    );
};

export default Sidebar;
