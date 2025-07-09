import { bolLabelIcons } from '../assets/images/bol-label';

interface Category {
    term_id: number;
    name: string;
    slug: string;
}

interface CategoryLabelProps {
    categories: Category[];
    count: 0 | 1 | 2;
    first: Category | undefined;
    second: Category | undefined;
}

const CategoryLabel = ({ categories, count, first, second }: CategoryLabelProps) => {
    const catTitle = categories[0].name;
    let catHref;

    if (count === 1 && first) {
        catHref = `/${first.slug}/${categories[0].slug}`;
    } else if (count === 2 && first && second) {
        catHref = `/${second.slug}/${first.slug}/${categories[0].slug}`;
    }

    const iconKey = `bolLabel${categories[0].term_id}` as keyof typeof bolLabelIcons;
    const iconScr = bolLabelIcons[iconKey];

    return (
        <a className="up-label" href={catHref} title={catTitle} target="_blank" rel="noopener noreferrer">
            <img src={iconScr} alt={catTitle} />
        </a>
    );
};

export default CategoryLabel;
