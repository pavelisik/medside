import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './Skelet.module.css';
const Skelet = ({ skeletClass = '', titleLinesCount = 3, itemsCount = 15 }) => {
    const blockHeight = titleLinesCount === 3 ? 193 : 171;
    const listHeight = itemsCount === 30 ? 322 : 151;
    return skeletClass === 'news' ? (_jsxs("div", { className: `${styles.loadingContainer} ${styles.newsContainer}`, children: [[...Array(3)].map((_, index) => (_jsxs("div", { children: [_jsx(Skeleton, { height: 202 }), _jsx(Skeleton, { count: 2, containerClassName: styles.title })] }, index))), _jsx("div", { children: _jsx("ul", { children: [...Array(4)].map((_, index) => (_jsx("li", { children: _jsx(Skeleton, { width: '95%', height: '90%' }) }, index))) }) })] })) : skeletClass === 'posts' ? (_jsx("div", { className: `${styles.loadingContainer} ${styles.postsContainer}`, style: { height: blockHeight }, children: [...Array(3)].map((_, index) => (_jsxs("div", { children: [_jsx(Skeleton, { height: 122 }), _jsx(Skeleton, { count: titleLinesCount, containerClassName: styles.title })] }, index))) })) : skeletClass === 'postsList' ? (_jsx("div", { className: `${styles.loadingContainer} ${styles.postsListContainer}`, style: { height: listHeight }, children: _jsx("ul", { children: [...Array(itemsCount)].map((_, index) => (_jsx("li", { children: _jsx(Skeleton, { width: '85%' }) }, index))) }) })) : skeletClass === 'tabs' ? (_jsx("div", { className: `${styles.loadingContainer} ${styles.tabsContainer}`, children: _jsx("ul", { children: [...Array(28)].map((_, index) => (_jsx("li", { children: _jsx(Skeleton, { className: styles.item }) }, index))) }) })) : null;
};
export default Skelet;
