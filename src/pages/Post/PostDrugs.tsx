import MainImageBlock from '../../components/MainImageBlock';
import Rating from '../../components/Rating/Rating';
import DataList from '../../components/DataList';
import ShareBlock from '../../components/ShareBlock';
import PageMenu from '../../components/PageMenu';
import AuthorBlock from '../../components/AuthorBlock';
import AlertBlock from '../../components/AlertBlock';
import CommentsBlock from '../../components/Comments/CommentsBlock';
import SimilarBottomBlock from '../../components/SimilarBottomBlock';
import { parseContent } from '../../utils/parseContent';
import type { WPDrugsData } from '../../types/wpTypes';

const PostDrugs = ({ data }: { data: WPDrugsData }) => {
    const { id, title, featured_image, date, head_description, rating, rating_count, categories, menu_data, content, metadata, post_author, tags_posts } =
        data.data;

    return (
        <div itemScope itemType="https://schema.org/Product">
            <h1 itemProp="name">{title}</h1>
            {/* 1 тут сделать вывод минимальной цены (новое поле в метаданных в эндпоинте) (но надо предусмотреть чтобы хлебные крошки и тайтл обрезались price-limit при наличии блока с ценой) */}
            <div className="title-bar">
                <MainImageBlock image={featured_image} title={title} alt={'Фото препарата'} />
                <div className="right-block long-date">
                    <Rating postId={id} initialRatingSum={rating} initialVoteCount={rating_count} />
                    <span className="date">
                        {/* поменять формат вывода даты */}
                        Описание актуально на <strong>{date}</strong>
                    </span>
                    {/* <span className="date">{date}</span> */}
                    <div className="right-inner-block">
                        <DataList catType={'lekarstva'} />
                        <ShareBlock className="share-block-top" title={title} description={head_description} image={featured_image} />
                    </div>
                </div>
            </div>
            <div id="page-content">
                {menu_data.length > 1 && <PageMenu data={menu_data} />}
                {/* сделать интеграцию блока с источником и слайдера аналогов (пока только его) */}
                {parseContent({ content })}
            </div>
            <ShareBlock className="share-block-bottom" title={title} description={head_description} image={featured_image} />
            <AuthorBlock author={post_author} />
            <AlertBlock>
                Информация о диетах на сайте является справочно-обобщающей, собранной из общедоступных источников и не может служить основанием для принятия
                решения об их использовании. Перед применением диеты обязательно проконсультируйтесь с врачом-диетологом.
            </AlertBlock>
            <CommentsBlock postId={id} />
            {tags_posts && <SimilarBottomBlock posts={tags_posts.slice(3, 11)} />}
        </div>
    );
};

export default PostDrugs;
