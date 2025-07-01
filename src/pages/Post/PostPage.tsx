import { useParams } from 'react-router';
import useDataBySlug from '../../hooks/useDataBySlug';
import NoMatch from '../NoMatch';
import Content from '../../layouts/Content';
import Post from './Post';
import Page from './Page';
import Doctor from './Doctor';
import Clinic from './Clinic';
import { isPostData, isPageData, isDoctorData, isClinicData } from '../../types/wpTypeGuards';
import type { WPDataBySlug } from '../../types/wpTypes';

const PostPage = () => {
    const { slug } = useParams();
    const { data, loading, error } = useDataBySlug<WPDataBySlug>(slug!, 'post');

    const isNoMatch = !loading && !error && !data;

    return isNoMatch ? (
        <NoMatch />
    ) : (
        <Content data={data} loading={loading}>
            {loading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : data && isPostData(data) ? (
                <Post data={data} />
            ) : data && isPageData(data) ? (
                <Page data={data} />
            ) : data && isDoctorData(data) ? (
                <Doctor data={data} />
            ) : data && isClinicData(data) ? (
                <Clinic data={data} />
            ) : null}
        </Content>
    );
};

export default PostPage;
