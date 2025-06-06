import { Link } from 'react-router';
import clsx from 'clsx';
import type { MenuItemType } from '../../types/menuTypes';
import { hasSubMenu } from '../../types/menuTypeGuards';
import SubMenu from './SubMenu';

interface MenuItemProps {
    menuItem: MenuItemType;
    itemIndex: number;
    isActive: boolean;
    handleMouseEnter: (item: number) => void;
    handleMouseLeave: () => void;
}

const MenuItem = ({ menuItem, itemIndex, isActive, handleMouseEnter, handleMouseLeave }: MenuItemProps) => {
    return (
        <li
            className={clsx('menu-item', `item0${itemIndex + 1}`, hasSubMenu(menuItem) && 'drop-item')}
            onMouseEnter={() => handleMouseEnter(itemIndex)}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={`/${menuItem.slug}`}>{menuItem.title}</Link>
            {hasSubMenu(menuItem) && (
                <SubMenu menuItem={menuItem} itemIndex={itemIndex} isActive={isActive} mainSlug={menuItem.slug} />
            )}
        </li>
    );
};

export default MenuItem;
