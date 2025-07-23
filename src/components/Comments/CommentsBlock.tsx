import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';

interface CommentsBlockProps {
    postId: number;
    isDrugs?: boolean;
}

const CommentsBlock = ({ postId, isDrugs = false }: CommentsBlockProps) => {
    return (
        <div id="page-comments">
            {isDrugs ? <h2>Отзывы</h2> : <h2>Комментарии</h2>}
            <CommentsList postId={postId} />
            <CommentsForm />
        </div>
    );
};

export default CommentsBlock;
