import { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';
import type { WPComment } from '../../types/wpTypes';

interface CommentsBlockProps {
    postId: number;
    isDrugs?: boolean;
}

const CommentsBlock = ({ postId, isDrugs = false }: CommentsBlockProps) => {
    const [newComment, setNewComment] = useState<WPComment | null>(null);

    useEffect(() => {
        if (newComment == null) return;
        const pageComments = document.getElementById('page-comments');
        if (pageComments) {
            const top = pageComments.getBoundingClientRect().top + window.scrollY - 10;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, [newComment]);

    return (
        <div id="page-comments">
            <h2>{isDrugs ? 'Отзывы' : 'Комментарии'}</h2>
            <CommentsList postId={postId} newComment={newComment} isDrugs={isDrugs} />
            <CommentsForm postId={postId} setNewComment={setNewComment} isDrugs={isDrugs} />
        </div>
    );
};

export default CommentsBlock;
