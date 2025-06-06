import type { MenuItemType, SubMenuItemType } from './menuTypes';

export function hasSubMenu(menuItem: MenuItemType): menuItem is MenuItemType & { submenu: SubMenuItemType[] } {
    return Array.isArray(menuItem.submenu) && menuItem.submenu.length > 0;
}
