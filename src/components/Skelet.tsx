import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './Skelet.module.css';

const Skelet = () => {
    return (
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
    );
};

export default Skelet;
