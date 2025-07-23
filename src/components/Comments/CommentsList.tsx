import clsx from 'clsx';
import { useState, useMemo, useCallback } from 'react';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import parse from 'html-react-parser';
import useComments from '../../hooks/useComments';
import RatingStatic from '../Rating/RatingStatic';
import { ucFirst } from '../../utils/ucFirst';

const CommentsList = ({ postId }: { postId: number }) => {
    const { comments, loading, error } = useComments({ per_page: 100, post: postId });
    const [showAll, setShowAll] = useState(false);

    const initialCount = 15;

    const toggleShow = useCallback(() => {
        const willShowAll = !showAll;
        setShowAll(willShowAll);
        if (!willShowAll) {
            const pageComments = document.getElementById('page-comments');
            if (pageComments) {
                const top = pageComments.getBoundingClientRect().top + window.pageYOffset + 5;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    }, [showAll]);

    const visibleComments = useMemo(() => {
        return showAll ? comments : comments.slice(0, initialCount);
    }, [comments, showAll]);

    return (
        <div className="comments-box">
            {loading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <>
                    {visibleComments.map(({ id, author_name, meta, date, content }) => (
                        <div className="comment" key={id}>
                            <span className="icon-image comment-avatar patient"></span>
                            <div className="comment-right">
                                <span className="comment-autor">{ucFirst(author_name)}</span>
                                <span className="comment-right-up">
                                    {Number(meta.rating) > 0 && (
                                        <span className="comment-rating">
                                            <RatingStatic rating={Number(meta.rating)} />
                                        </span>
                                    )}
                                    <span className="comment-date">{format(parseISO(date), 'd MMMM yyyy, HH:mm', { locale: ru })}</span>
                                </span>
                                {content.rendered && parse(content.rendered)}
                            </div>
                        </div>
                    ))}
                    {comments.length > initialCount && (
                        <div className={clsx('reviews-more', showAll && 'more-up')} onClick={toggleShow}>
                            <span>{showAll ? 'свернуть комментарии' : `показать еще комментарии (${comments.length - initialCount})`}</span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CommentsList;
