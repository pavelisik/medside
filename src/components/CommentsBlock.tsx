import { useForm, Controller, type FieldErrors, type SubmitHandler } from 'react-hook-form';
import RatingInput from './Rating/RatingInput';
import { showSuccess, showWarning } from '../utils/toast';

interface CommentForm {
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    name: string;
    email: string;
    commentText: string;
}

const CommentsBlock = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
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

    const onSubmit: SubmitHandler<CommentForm> = (data) => {
        // тут буду отправлять валидные данные запросом на сервер
        console.log('Отправлено: ', data);
        showSuccess('Комментарий отправлен');
    };

    return (
        <div id="page-comments">
            <h2>Комментарии</h2>
            <div id="respond">
                <div id="comments-form">
                    <form
                        onSubmit={handleSubmit(onSubmit, (errors) => {
                            showFirstErrorToast(errors);
                        })}
                    >
                        <div className="rating-comments">
                            <span>Оцените статью: </span>
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
                            type="text"
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
                                required: 'Введите текст комментария',
                                maxLength: {
                                    value: 1000,
                                    message: 'Текст комментария не должен превышать 1000 символов',
                                },
                            })}
                            placeholder="Ваш комментарий"
                            aria-required="true"
                            aria-invalid={!!errors.commentText}
                        ></textarea>

                        <button type="submit" id="submit">
                            Отправить комментарий
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommentsBlock;
