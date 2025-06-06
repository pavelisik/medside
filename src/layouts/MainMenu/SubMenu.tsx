import { Link } from 'react-router';
import clsx from 'clsx';
import { chunkArray } from '../../utils/arrayUtils';
import SubMenuColumn from './SubMenuColumn';
import type { MenuItemWithSubmenuType } from '../../types/menuTypes';

interface SubMenuProps {
    menuItem: MenuItemWithSubmenuType;
    itemIndex: number;
    isActive: boolean;
    mainSlug: string;
}

const SubMenu = ({ menuItem, itemIndex, isActive, mainSlug }: SubMenuProps) => {
    return (
        <div className={clsx('top_menu_body', `body0${itemIndex + 1}`, !isActive && 'body_disable')}>
            {chunkArray(menuItem.submenu, mainSlug === 'lekarstva' ? 8 : 9).map((column, columnIndex, array) => (
                <SubMenuColumn
                    key={columnIndex}
                    columnIndex={columnIndex}
                    column={column}
                    isLast={columnIndex === array.length - 1}
                    mainSlug={mainSlug}
                />
            ))}
            {mainSlug === 'lekarstva' && (
                <>
                    <ul className="new-list"></ul>
                    <Link className="icon-text all_items" to="/active-substances">
                        ДЕЙСТВУЮЩИЕ ВЕЩЕСТВА
                    </Link>
                </>
            )}
        </div>
    );
};

export default SubMenu;
