export interface SubMenuItemType {
    title: string;
    slug: string;
}
export interface MenuItemType {
    title: string;
    slug: string;
    submenu?: SubMenuItemType[];
}

export type MenuItemWithSubmenuType = MenuItemType & { submenu: SubMenuItemType[] };
