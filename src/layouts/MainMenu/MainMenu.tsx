import { useState, useRef } from 'react';
import { menuData } from '../../data/menuData';
import MenuItem from './MenuItem';

const MainMenu = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const timerRef = useRef<number | null>(null);

    // наведение мыши на пункт меню
    const handleMouseEnter = (item: number) => {
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
            setActiveItem(item);
        }, 150);
    };

    // уход мыши с пункта меню
    const handleMouseLeave = () => {
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
        }
        setActiveItem(null);
    };

    return (
        <nav className="main-top-menu">
            <ul>
                {menuData.map((menuItem, itemIndex) => {
                    return (
                        <MenuItem
                            key={itemIndex}
                            menuItem={menuItem}
                            itemIndex={itemIndex}
                            isActive={activeItem === itemIndex}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default MainMenu;
