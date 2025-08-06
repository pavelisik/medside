import PostBolezni from './PostBolezni';
import PostSymptoms from './PostSymptoms';
import PostDiets from './PostDiets';
import PostDrugs from './PostDrugs';
import type { WPPostData } from '../../types/wpTypes';
import { isBolezniData, isSymptomsData, isDietsData, isDrugsData } from '../../types/wpTypeGuards';

const Post = ({ data }: { data: WPPostData }) => {
    if (isBolezniData(data)) return <PostBolezni data={data} />;
    if (isSymptomsData(data)) return <PostSymptoms data={data} />;
    if (isDietsData(data)) return <PostDiets data={data} />;
    if (isDrugsData(data)) return <PostDrugs data={data} />;

    return null;
};

export default Post;
