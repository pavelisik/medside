import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

interface CommentsBlockProps {
    postId: number;
    isDrugs?: boolean;
}

const CommentsBlock = ({ postId, isDrugs = false }: CommentsBlockProps) => {
    return (
        <div id="page-comments">
            <h2>{isDrugs ? 'Отзывы' : 'Комментарии'}</h2>
            <CommentsList postId={postId} isDrugs={isDrugs} />
            <CommentsForm postId={postId} isDrugs={isDrugs} />
        </div>
    );
};

export default CommentsBlock;
