import { Link } from 'react-router';

interface BreadcrumbsItemProps {
    title: string;
    slug?: string;
    position: number;
    showSeparator?: boolean;
}

const Sep = () => {
    return <span className="icon-image sep" aria-hidden="true" />;
};

const BreadcrumbsItem = ({ title, slug, position, showSeparator = true }: BreadcrumbsItemProps) => {
    return (
        <span itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
            {slug ? (
                <Link to={slug} itemProp="item">
                    <span itemProp="name">{title}</span>
                </Link>
            ) : (
                <span itemProp="item">
                    <span itemProp="name">{title}</span>
                </span>
            )}
            <meta itemProp="position" content={String(position)} />
            {showSeparator && <Sep />}
        </span>
    );
};

export default BreadcrumbsItem;
