import { Link, useLocation } from 'react-router';
import { cleanPath } from '../utils/cleanPath';

interface PaginationProps {
    page: number;
    pages: number;
}

const Pagination = ({ page, pages }: PaginationProps) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const path = cleanPath(currentPath);
    const firstPath = path;
    const prevPath = `${path}${page > 2 ? `/page/${page - 1}` : ''}`;
    const nextPath = `${path}/page/${page + 1}`;
    const lastPath = `${path}/page/${pages}`;

    if (pages <= 1) return null;

    let startPage = page - 1;
    let endPage = page + 1;

    if (startPage <= 0) startPage = 1;
    if (endPage - startPage !== 2) endPage = startPage + 2;
    if (endPage > pages) {
        startPage = pages - 2;
        endPage = pages;
    }
    if (startPage <= 0) startPage = 1;

    return (
        <div className="wp-pagenavi">
            <span className="pages">
                Страница {page} из {pages}
            </span>
            {page > 1 && (
                <Link className="prev" to={prevPath}>
                    <span></span>
                </Link>
            )}
            {startPage >= 2 && pages > 3 && (
                <>
                    <Link className="first" to={firstPath}>
                        1
                    </Link>
                    {startPage !== 2 && <span className="extend">...</span>}
                </>
            )}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                const i = startPage + index;
                return i === page ? (
                    <span key={i} className="current">
                        {i}
                    </span>
                ) : (
                    <Link key={i} to={i === 1 ? firstPath : `${path}/page/${i}`}>
                        {i}
                    </Link>
                );
            })}
            {endPage < pages && (
                <>
                    {endPage !== pages - 1 && <span className="extend">...</span>}
                    <Link className="last" to={lastPath}>
                        {pages}
                    </Link>
                </>
            )}
            {page < pages && (
                <Link className="next" to={nextPath}>
                    <span></span>
                </Link>
            )}
        </div>
    );
};

export default Pagination;
