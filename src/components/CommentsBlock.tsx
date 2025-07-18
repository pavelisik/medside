import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import RatingInput from './Rating/RatingInput';

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

    const onSubmit: SubmitHandler<CommentForm> = (data) => {
        // тут буду отправлять валидные данные запросом на сервер
        console.log('Отправлено: ', data);
    };

    return (
        <div id="page-comments">
            <h2>Комментарии</h2>
            <div id="respond">
                <div id="comments-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.name?.message ? (
                            <p className="error">{errors.name.message}</p>
                        ) : errors.email?.message ? (
                            <p className="error">{errors.email.message}</p>
                        ) : errors.commentText?.message ? (
                            <p className="error">{errors.commentText.message}</p>
                        ) : null}

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
                                required: 'введите имя',
                                maxLength: {
                                    value: 30,
                                    message: 'имя не должно превышать 30 символов',
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
                                required: 'введите e-mail',
                                maxLength: {
                                    value: 30,
                                    message: 'e-mail не должен превышать 30 символов',
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Введите корректный email',
                                },
                            })}
                            placeholder="E-mail (обязательно)"
                            aria-required="true"
                            aria-invalid={!!errors.email}
                        />

                        <textarea
                            id="comment"
                            {...register('commentText', {
                                required: 'введите текст комментария',
                                maxLength: {
                                    value: 1000,
                                    message: 'текст комментария не должен превышать 1000 символов',
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
