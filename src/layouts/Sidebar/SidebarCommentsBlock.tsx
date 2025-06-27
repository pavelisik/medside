import { format, parseISO } from 'date-fns';
import clsx from 'clsx';
import useComments from '../../hooks/useComments';
import styles from './SidebarCommentsBlock.module.css';

const SidebarCommentsBlock = () => {
    const { comments, loading, error } = useComments({ per_page: 4 });

    return (
        <div className="sidebar-block comments-block">
            <h2>Последние комментарии</h2>
            <div className="sidebar-block-body">
                {loading ? (
                    <p>Загрузка...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <>
                        {comments.map(({ id, post_slug, post_title, date, author_name, comment_excerpt }) => (
                            <div className="sidebar-block-single" key={id}>
                                <a href={`/${post_slug}#page-comments`} target="_blank" rel="noopener noreferrer">
                                    {post_title}
                                </a>
                                <span className="comment-date">{format(parseISO(date), 'dd.MM.yyyy')}</span>
                                <p>
                                    <span className={clsx('icon-image', 'comment-avatar', 'patient')}></span>
                                    <span className={clsx('comment-autor', styles.commentAuthor)}>{author_name}: </span>
                                    {comment_excerpt}
                                </p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default SidebarCommentsBlock;
