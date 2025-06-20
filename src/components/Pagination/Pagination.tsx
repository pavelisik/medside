import { Link, useLocation } from 'react-router';

interface PaginationProps {
    page: number;
    pages: number;
}

const Pagination = ({ page, pages }: PaginationProps) => {
    const location = useLocation();

    return (
        <div className="wp-pagenavi">
            <span className="pages">
                Страница {page} из {pages}
            </span>
            <span className="current">{page}</span>
            <Link to={`${location.pathname}?page=2`}>2</Link>
            <Link to={`${location.pathname}?page=3`}>3</Link>
            <span className="extend">…</span>
            <Link className="last" to={`${location.pathname}?page=9`}>
                {pages}
            </Link>
            <Link className="next" to={`${location.pathname}?page=2`}>
                <span></span>
            </Link>
        </div>
    );
};

export default Pagination;
