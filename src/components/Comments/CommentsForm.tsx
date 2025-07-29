import { useForm, Controller, type FieldErrors, type SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import RatingInput from '../Rating/RatingInput';
import { showSuccess, showWarning } from '../../utils/toast';

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

    const showFirstErrorToast = (errors: FieldErrors<CommentForm>) => {
        const errorFields: (keyof CommentForm)[] = ['name', 'email', 'commentText'];
        const firstErrorField = errorFields.find((field) => errors[field]?.message);
        const message = firstErrorField && errors[firstErrorField]?.message;

        if (message) {
            showWarning(message);
        }
    };

    const onSubmit: SubmitHandler<CommentForm> = async (data) => {
        try {
            const response = await axios.post('https://medside.ru/wp-json/custom/v1/comment', {
                post_id: postId,
                rating: data.rating,
                name: data.name,
                email: data.email,
                comment_text: data.commentText,
                website: data.website, // скрытое поле
            });

            if (response.data.success) {
                showSuccess(`${isDrugs ? 'Отзыв' : 'Комментарий'} отправлен`);
                // console.log('Отправлено: ', data);
                reset();
            }
        } catch (error: any) {
            if (error.response && error.response.data) {
                const { status, message } = error.response.data;

                if (status === 'bot') {
                    showWarning('Подозрение на бота. Отправка заблокирована.');
                } else if (status === 'spam') {
                    showWarning('Комментарий распознан как спам.');
                } else if (status === 'limit') {
                    showWarning('Вы недавно уже оставляли комментарий. Попробуйте позже.');
                } else {
                    showWarning(message || 'Произошла ошибка при отправке.');
                }
            } else {
                // Ошибки сети или что-то совсем сломано
                showWarning('Ошибка соединения с сервером.');
            }
        }
    };

    return (
        <div id="respond">
            <div id="comments-form">
                <form
                    onSubmit={handleSubmit(onSubmit, (errors) => {
                        showFirstErrorToast(errors);
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
                        id="author"
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
                        id="email"
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
                        id="comment"
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

                    <button type="submit" id="submit">
                        Отправить {isDrugs ? 'отзыв' : 'комментарий'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentsForm;
