import { Link } from 'react-router';
import { MdArrowForwardIos as Arrow } from 'react-icons/md';
import styles from './MainPage.module.css';
import BlockNews from './BlockNews';
import BlockPosts from './BlockPosts';
import BlockPostsList from './BlockPostsList';
import BlockTabs from './BlockTabs';
import docLogo from '../../assets/images/doc-logo.png';
import clinicLogo from '../../assets/images/clinic-logo.png';

const MainPage = () => {
    const diseasesBlockParams = { include: '121618,116766,127274', orderby: 'include' };
    const symptomsBlockParams = { include: '141393,64417,67179', orderby: 'include' };
    const diagnosticsBlockParams = { include: '7989,117862,7756', orderby: 'include' };
    const servicesBlockParams = { include: '68761,66768,22261', orderby: 'include' };
    const drugsBlockParams = {
        include:
            '48338,24331,50677,54467,54959,122667,59666,31689,24433,52791,123575,32746,32967,26569,51192,73751,30377,123422,51169,30423,60397,18516,36085,32775,26376,24359,62850,32670,33946,53303',
        per_page: 30,
        orderby: 'title',
        order: 'asc',
    };
    const activeSubstanceBlockParams = {
        include: '120703,76655,58008,121428,120662,48615,56910,55226,52686,53847,55773,48279,48578,58198,51678',
        per_page: 15,
        orderby: 'title',
        order: 'asc',
    };
    const diseaseReviewsBlockParams = { include: '64319,9623,16331', orderby: 'include' };
    const drugReviewsBlockParams = { include: '68195,69986,73091', orderby: 'include' };
    const popularDietsBlockParams = { include: '83701,79157,79027', orderby: 'include' };
    const therapeuticDietsBlockParams = { include: '79589,82401,81260', orderby: 'include' };

    return (
        <>
            <BlockNews />
            <BlockPosts params={diseasesBlockParams} blockStyle="index-block block-4 left">
                <Link to="/bolezni">Болезни</Link>
                <Arrow className={styles.arrow} />
                Популярные статьи
            </BlockPosts>
            <BlockPosts params={symptomsBlockParams} blockStyle="index-block block-4 right">
                <Link to="/symptoms">Симптомы</Link>
                <Arrow className={styles.arrow} />
                Наиболее частые жалобы
            </BlockPosts>
            <BlockPosts params={diagnosticsBlockParams} titleLinesCount={2} blockStyle="index-block block-4 left">
                <Link to="/diagnostics">Диагностика</Link>
            </BlockPosts>
            <BlockPosts params={servicesBlockParams} titleLinesCount={2} blockStyle="index-block block-4 right">
                <Link to="/services">Медицинские услуги</Link>
            </BlockPosts>
            <BlockPostsList params={drugsBlockParams} itemsCount={30} blockStyle="index-block block-toplist left">
                <Link to="/lekarstva">Лекарства</Link>
                <Arrow className={styles.arrow} />
                Топ 30
            </BlockPostsList>
            <div className="index-block right">
                <BlockPostsList params={activeSubstanceBlockParams} itemsCount={15} blockStyle="block-toplist">
                    <Link to="/active-substances">Действующие вещества</Link>
                </BlockPostsList>
                <BlockTabs />
            </div>
            <BlockPosts params={diseaseReviewsBlockParams} blockStyle="index-block block-4 left">
                <Link to="/stati">Справочник</Link>
                <Arrow className={styles.arrow} />
                <Link to="/stati/obzory-zabolevaniy">Обзоры заболеваний</Link>
            </BlockPosts>
            <BlockPosts params={drugReviewsBlockParams} blockStyle="index-block block-4 right">
                <Link to="/stati">Справочник</Link>
                <Arrow className={styles.arrow} />
                <Link to="/stati/obzoryi-lekarstv">Обзоры лекарств</Link>
            </BlockPosts>
            <BlockPosts params={popularDietsBlockParams} blockStyle="index-block block-4 left">
                <Link to="/diets">Диеты</Link>
                <Arrow className={styles.arrow} />
                Популярные
            </BlockPosts>
            <BlockPosts params={therapeuticDietsBlockParams} blockStyle="index-block block-4 right">
                <Link to="/diets">Диеты</Link>
                <Arrow className={styles.arrow} />
                <Link to="/diets/lechebnyie">Лечебные</Link>
            </BlockPosts>
            <div className="index-block block-clindoc left">
                <div className="img-block">
                    <img src={docLogo} alt="Врачи" />
                </div>
                <div className="right-block">
                    <h2>
                        <Link to="/doctors">Врачи</Link>
                    </h2>
                    <p>
                        На сайте представлена база врачей всех специализаций с проверенными отзывами и возможностью
                        записи на прием онлайн
                    </p>
                    <Link to="/doctors" className="icon-text link">
                        выбрать врача
                    </Link>
                </div>
            </div>
            <div className="index-block block-clindoc right">
                <div className="img-block">
                    <img src={clinicLogo} alt="Клиники" />
                </div>
                <div className="right-block">
                    <h2>
                        <Link to="/clinics">Клиники</Link>
                    </h2>
                    <p>
                        На сайте представлена база клиник по городам с описанием услуг и диагностик и возможностью
                        записи на прием онлайн
                    </p>
                    <Link to="/clinics" className="icon-text link">
                        выбрать клинику
                    </Link>
                </div>
            </div>
            <div className="clear"></div>
        </>
    );
};

export default MainPage;
