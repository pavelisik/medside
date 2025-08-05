import { getIcon } from '../utils/getIcon';
import type { WPDietsMetadata } from '../types/wpTypes';

interface Category {
    term_id: number;
    name: string;
    slug: string;
}

interface DietsLabelsProps {
    categories: Category[];
    data?: WPDietsMetadata;
}

const DietsLabels = ({ categories, data }: DietsLabelsProps) => {
    return (
        <div className="icons-block">
            <ul>
                {categories.map((cat) => (
                    <li>
                        <a href={`/diets/${cat.slug}`} title={cat.name} target="_blank" rel="noopener noreferrer">
                            <img src={getIcon(cat.term_id, 'diet')} alt={cat.name} />
                        </a>
                    </li>
                ))}

                <li>
                    <img src="https://medside.ru/wp-content/themes/medinfo/images/diets-label/diets-label-1.png" title="Противопоказана беременным" />
                </li>

                <li>
                    <img
                        src="https://medside.ru/wp-content/themes/medinfo/images/diets-label/diets-label-3.png"
                        title="Противопоказана при грудном вскармливании"
                    />
                </li>

                <li>
                    <img src="https://medside.ru/wp-content/themes/medinfo/images/diets-label/diets-label-4.png" title="Противопоказана детям" />
                </li>

                <li>
                    <img src="https://medside.ru/wp-content/themes/medinfo/images/diets-label/diets-label-9.png" title="Безуглеводные" />
                </li>
            </ul>
        </div>
    );
};

export default DietsLabels;
