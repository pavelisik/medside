const CommentsBlock = () => {
    return (
        <div id="page-comments">
            <h2>Комментарии</h2>

            <div id="respond">
                <div id="comments-form">
                    <form>
                        <div className="rating-comments">
                            <span>Оцените статью: </span>
                        </div>

                        <input type="text" placeholder="Имя (обязательно)" name="author" id="author" tabIndex={1} aria-required="true" value="" />
                        <input type="text" placeholder="E-mail (обязательно)" name="email" id="email" tabIndex={2} aria-required="true" value="" />
                        <textarea name="comment" id="comment" tabIndex={3} placeholder="Ваш комментарий"></textarea>

                        <input name="submit" type="submit" id="submit" tabIndex={4} value="Отправить комментарий" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommentsBlock;
