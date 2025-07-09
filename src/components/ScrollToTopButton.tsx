import clsx from 'clsx';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return <a id="up-button" href="#" className={clsx('icon-image', visible && 'show')} onClick={scrollToTop} aria-label="Наверх страницы" />;
};

export default ScrollToTopButton;
