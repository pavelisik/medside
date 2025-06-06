import clsx from 'clsx';
import type { SubMenuItemType } from '../../types/menuTypes';
import SubMenuItem from './SubMenuItem';

interface SubMenuColumnProps {
    columnIndex: number;
    column: SubMenuItemType[];
    isLast: boolean;
    mainSlug: string;
}

const SubMenuColumn = ({ columnIndex, column, isLast, mainSlug }: SubMenuColumnProps) => {
    return (
        <ul className={clsx('body-column', `column${columnIndex + 1}`, isLast && 'column-last')}>
            {column.map((subItem, subItemIndex) => (
                <SubMenuItem key={subItemIndex} subItem={subItem} mainSlug={mainSlug} />
            ))}
        </ul>
    );
};

export default SubMenuColumn;
