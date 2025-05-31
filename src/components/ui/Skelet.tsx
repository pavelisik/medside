import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './Skelet.module.css';

interface SkeletProps {
    skeletClass?: string;
    titleLinesCount?: number;
    itemsCount?: number;
}

const Skelet = ({ skeletClass = '', titleLinesCount = 3, itemsCount = 15 }: SkeletProps) => {
    const blockHeight = titleLinesCount === 3 ? 193 : 171;
    const listHeight = itemsCount === 30 ? 322 : 151;

    return skeletClass === 'news' ? (
        <div className={`${styles.loadingContainer} ${styles.newsContainer}`}>
            {[...Array(3)].map((_, index) => (
                <div key={index}>
                    <Skeleton height={202} />
                    <Skeleton count={2} containerClassName={styles.title} />
                </div>
            ))}
            <div>
                <ul>
                    {[...Array(4)].map((_, index) => (
                        <li key={index}>
                            <Skeleton width={'95%'} height={'90%'} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ) : skeletClass === 'posts' ? (
        <div className={`${styles.loadingContainer} ${styles.postsContainer}`} style={{ height: blockHeight }}>
            {[...Array(3)].map((_, index) => (
                <div key={index}>
                    <Skeleton height={122} />
                    <Skeleton count={titleLinesCount} containerClassName={styles.title} />
                </div>
            ))}
        </div>
    ) : skeletClass === 'postsList' ? (
        <div className={`${styles.loadingContainer} ${styles.postsListContainer}`} style={{ height: listHeight }}>
            <ul>
                {[...Array(itemsCount)].map((_, index) => (
                    <li key={index}>
                        <Skeleton width={'85%'} />
                    </li>
                ))}
            </ul>
        </div>
    ) : skeletClass === 'tabs' ? (
        <div className={`${styles.loadingContainer} ${styles.tabsContainer}`}>
            <ul>
                {[...Array(28)].map((_, index) => (
                    <li key={index}>
                        <Skeleton className={styles.item} />
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
};

export default Skelet;
