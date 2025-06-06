import { Link } from 'react-router';
import type { SubMenuItemType } from '../../types/menuTypes';

const SubMenuItem = ({ subItem, mainSlug }: { subItem: SubMenuItemType; mainSlug: string }) => {
    return (
        <li>
            <Link to={`/${mainSlug}/${subItem.slug}`}>{subItem.title}</Link>
        </li>
    );
};

export default SubMenuItem;
