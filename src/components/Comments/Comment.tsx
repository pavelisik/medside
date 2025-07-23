import { useMemo } from 'react';
import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import RatingStatic from '../Rating/RatingStatic';
import { ucFirst } from '../../utils/ucFirst';
import type { WPComment } from '../../types/wpTypes';

interface CommentProps {
    comment: WPComment;
    isDrugs: boolean;
}

const ADMIN_IDS = [1, 2105, 2092];
const isAdmin = (authorId: number) => ADMIN_IDS.includes(authorId);

const Comment = ({ comment, isDrugs }: CommentProps) => {
    const { author, author_name, meta, date, comment_text } = comment;

    const schemaProps = useMemo(() => {
        if (!isDrugs) return { comment: {}, author: {}, text: {} };
        return {
            comment: {
                itemProp: 'review',
                itemScope: true,
                itemType: 'https://schema.org/Review',
            },
            author: { itemProp: 'author' },
            text: { itemProp: 'description' },
        };
    }, [isDrugs]);

    return (
        <div className="comment" {...schemaProps.comment}>
            <span className={clsx('icon-image', 'comment-avatar', isAdmin(author) ? 'doctor' : 'patient')}></span>
            <div className="comment-right">
                <span className="comment-autor" {...schemaProps.author}>
                    {ucFirst(author_name)}
                </span>
                <span className="comment-right-up">
                    {Number(meta.rating) > 0 && (
                        <span className="comment-rating">
                            <RatingStatic rating={Number(meta.rating)} isReview />
                        </span>
                    )}
                    {isDrugs && <meta itemProp="datePublished" content={format(parseISO(date), 'yyyy-MM-dd')} />}
                    <span className="comment-date">{format(parseISO(date), 'd MMMM yyyy, HH:mm', { locale: ru })}</span>
                </span>
                <p {...schemaProps.text}>{comment_text}</p>
            </div>
        </div>
    );
};

export default Comment;
