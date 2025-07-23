import clsx from 'clsx';
import { useState, useMemo, useCallback } from 'react';
import useComments from '../../hooks/useComments';
import Comment from './Comment';

interface CommentsListProps {
    postId: number;
    isDrugs: boolean;
}

const initialCount = 15;

const CommentsList = ({ postId, isDrugs }: CommentsListProps) => {
    const { comments, loading, error } = useComments({ per_page: 100, post: postId });
    const [showAll, setShowAll] = useState(false);

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
                    {visibleComments.map((comment) => (
                        <Comment key={comment.id} comment={comment} isDrugs={isDrugs} />
                    ))}
                    {comments.length > initialCount && (
                        <div className={clsx('reviews-more', showAll && 'more-up')} onClick={toggleShow}>
                            <span>
                                {showAll
                                    ? `свернуть ${isDrugs ? 'отзывы' : 'комментарии'}`
                                    : `показать еще ${isDrugs ? 'отзывы' : 'комментарии'} (${comments.length - initialCount})`}
                            </span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default CommentsList;
