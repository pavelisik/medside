import clsx from 'clsx';
import { useState } from 'react';
import type { WPPostData } from '../types/wpTypes';

interface AuthorBlockProps {
    author: WPPostData['data']['post_author'];
}

const AuthorBlock = ({ author }: AuthorBlockProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="author-block">
            <div className="author-img">
                {author.image ? <img src={author.image} alt={author.name} loading="lazy" /> : <div className="icon-image author-empty"></div>}
            </div>
            <div className="author-right">
                <span className="author-name">
                    <strong>Автор-составитель: </strong>
                    <a href={`/author/${author.slug}`} title="Подробнее об авторе" target="_blank" rel="noopener noreferrer">
                        {author.name}
                    </a>{' '}
                    - {author.info_about}
                </span>
                <span className="author-special">
                    {author.info_special && (
                        <>
                            <strong>Специальность: </strong>
                            {author.info_special}
                        </>
                    )}
                </span>
                {author.info_education && (
                    <a className={clsx('icon-text', 'author-more', isOpen && 'close')} onClick={toggleDetails} role="button" tabIndex={0}>
                        {isOpen ? 'скрыть' : 'подробнее'}
                    </a>
                )}
            </div>

            {author.info_education && (
                <div className="author-description" style={{ maxHeight: isOpen ? '500px' : '0px' }}>
                    <p>
                        <strong>Образование: </strong>
                        {author.info_education}
                    </p>
                    {author.info_experience && (
                        <p>
                            <strong>Опыт работы: </strong>
                            {author.info_experience}
                        </p>
                    )}

                    {author.info_other && <p>{author.info_other}</p>}
                </div>
            )}
        </div>
    );
};

export default AuthorBlock;
