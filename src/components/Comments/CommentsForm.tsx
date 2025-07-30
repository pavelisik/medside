import { useState, useEffect } from 'react';
import { useForm, Controller, type FieldErrors, type SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import RatingInput from '../Rating/RatingInput';
import { showSuccess, showWarning } from '../../utils/toast';
import clsx from 'clsx';

interface CommentForm {
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    name: string;
    email: string;
    commentText: string;
    website?: string; // скрытое поле для проверки ботов
}

interface CommentsFormProps {
    postId: number;
    isDrugs: boolean;
}

const CommentsForm = ({ postId, isDrugs }: CommentsFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        setIsLocked(!!Cookies.get(`comments_lock_${postId}`));
    }, [postId]);

    const COMMENT_COOKIE_EXPIRATION = 1 / 24;

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<CommentForm>({
        defaultValues: {
            rating: 0,
            name: '',
            email: '',
            commentText: '',
        },
    });

    const toastFirstFieldError = (errors: FieldErrors<CommentForm>) => {
        const errorFields: (keyof CommentForm)[] = ['name', 'email', 'commentText'];
        const firstErrorField = errorFields.find((field) => errors[field]?.message);
        const message = firstErrorField && errors[firstErrorField]?.message;

        if (message) {
            showWarning(message);
        }
    };

    const handleError = (code: string, serverMessage?: string) => {
        const messages: Record<string, string> = {
            bot: 'Подозрение на бота. Отправка заблокирована',
            spam: 'Комментарий распознан как спам. Отправка заблокирована',
            limit: 'Вы недавно уже оставляли комментарий. Попробуйте позже',
        };

        Cookies.set(`comments_lock_${postId}`, '1', { expires: COMMENT_COOKIE_EXPIRATION });
        setIsLocked(true);
        if (code !== 'limit') reset();

        showWarning(messages[code] || serverMessage || 'Ошибка при отправке комментария');
    };

    const onSubmit: SubmitHandler<CommentForm> = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('https://medside.ru/wp-json/custom/v1/comment', {
                post_id: postId,
                rating: data.rating,
                name: data.name,
                email: data.email,
                comment_text: data.commentText,
                website: data.website,
            });

            if (response.data.success) {
                showSuccess(`${isDrugs ? 'Отзыв' : 'Комментарий'} отправлен`);
                Cookies.set(`comments_lock_${postId}`, '1', { expires: COMMENT_COOKIE_EXPIRATION });
                setIsLocked(true);
                reset();
            }
        } catch (error: any) {
            if (error.response?.data) {
                const { error_code, message } = error.response.data;
                handleError(error_code, message);
            } else {
                showWarning('Ошибка соединения с сервером');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="respond">
            <div id="comments-form">
                <form
                    onSubmit={handleSubmit(onSubmit, (errors) => {
                        toastFirstFieldError(errors);
                    })}
                    noValidate
                >
                    {/* скрытое поле */}
                    <input type="text" style={{ display: 'none' }} autoComplete="off" {...register('website')} />

                    <div className="rating-comments">
                        <span>Оцените {isDrugs ? 'препарат' : 'статью'}: </span>
                        <Controller
                            name="rating"
                            control={control}
                            render={({ field }) => <RatingInput rating={field.value} changeRating={field.onChange} name={field.name} />}
                        />
                    </div>

                    <input
                        type="text"
                        className="author"
                        {...register('name', {
                            required: 'Введите имя',
                            maxLength: {
                                value: 30,
                                message: 'Имя не должно превышать 30 символов',
                            },
                        })}
                        placeholder="Имя (обязательно)"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                    />

                    <input
                        type="email"
                        className="email"
                        {...register('email', {
                            required: 'Введите e-mail',
                            maxLength: {
                                value: 30,
                                message: 'E-mail не должен превышать 30 символов',
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Введите корректный e-mail',
                            },
                        })}
                        placeholder="E-mail (обязательно)"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                    />

                    <textarea
                        className="comment-text"
                        {...register('commentText', {
                            required: `Введите текст ${isDrugs ? 'отзыва' : 'комментария'}`,
                            maxLength: {
                                value: 1000,
                                message: `Текст ${isDrugs ? 'отзыва' : 'комментария'} не должен превышать 1000 символов`,
                            },
                        })}
                        placeholder={`Ваш ${isDrugs ? 'отзыв' : 'комментарий'}`}
                        aria-required="true"
                        aria-invalid={!!errors.commentText}
                    ></textarea>

                    <button type="submit" className={clsx('submit', (isSubmitting || isLocked) && 'disabled')} disabled={isSubmitting || isLocked}>
                        {isSubmitting ? 'Отправка...' : `Отправить ${isDrugs ? 'отзыв' : 'комментарий'}`}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentsForm;
