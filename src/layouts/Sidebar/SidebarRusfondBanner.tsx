import clsx from 'clsx';
import { useState } from 'react';
import useRusfondData from '../../hooks/useRusfondData';

const SidebarRusfondBanner = () => {
    const { items, loading, error } = useRusfondData();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="sidebar-block rusfond-block">
            <div className="sidebar-block-body">
                <div className="top">
                    Русфонд<span className="help">Помогаем помогать</span>
                </div>
                <div className="link">
                    <a href="https://rusfond.ru" target="_blank" rel="noopener noreferrer">
                        rusfond.ru
                    </a>
                </div>
                <div className="active">
                    {loading ? (
                        <p>Загрузка...</p>
                    ) : error ? (
                        <p className="error">{error}</p>
                    ) : (
                        <>
                            <div className="icons">
                                {items.map(({ url, image, child_name }, index) => (
                                    <a
                                        className="icon"
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                    >
                                        <img src={image} id={`img${index}`} className={clsx(index === activeIndex && 'curr')} alt={child_name} loading="lazy" />
                                    </a>
                                ))}
                            </div>
                            <div className="letters">
                                {items.map(
                                    ({ url, child_name, description }, index) =>
                                        index === activeIndex && (
                                            <a className="letter" href={url} target="_blank" rel="noopener noreferrer" id={`letter${index}`} key={index}>
                                                <b>{child_name}</b>
                                                {description}
                                            </a>
                                        )
                                )}
                            </div>
                        </>
                    )}
                </div>
                <div className="bottom">помогите пожалуйста</div>
            </div>
        </div>
    );
};

export default SidebarRusfondBanner;
