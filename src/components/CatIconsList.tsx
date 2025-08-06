import { getIcon } from '../utils/getIcon';
import type { WPDietsMetadata } from '../types/wpTypes';

interface Category {
    term_id: number;
    name: string;
    slug: string;
}

interface DietsLabelsProps {
    categories: Category[];
    labels?: WPDietsMetadata['labels'];
}

const CatIconsList = ({ categories, labels }: DietsLabelsProps) => {
    return (
        <div className="icons-block">
            <ul>
                {categories.map((cat) => (
                    <li key={cat.term_id}>
                        <a href={`/diets/${cat.slug}`} title={cat.name} target="_blank" rel="noopener noreferrer">
                            <img src={getIcon(cat.term_id, 'diet')} alt={cat.name} />
                        </a>
                    </li>
                ))}
                {labels?.map((label) => (
                    <li key={label.id}>
                        <img src={getIcon(label.id, 'diet', 'label')} alt={label.name} title={label.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CatIconsList;
