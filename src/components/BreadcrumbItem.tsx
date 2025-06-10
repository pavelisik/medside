import { Link } from 'react-router';

interface BreadcrumbItemProps {
    title: string;
    slug?: string;
    position: number;
    showSeparator?: boolean;
}

const Sep = () => {
    return <span className="icon-image sep" aria-hidden="true" />;
};

const BreadcrumbItem = ({ title, slug, position, showSeparator = true }: BreadcrumbItemProps) => {
    return (
        <span itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
            {slug ? (
                <Link to={slug} itemID={slug}>
                    <span itemProp="name">{title}</span>
                </Link>
            ) : (
                <span itemProp="name">{title}</span>
            )}
            <meta itemProp="position" content={String(position)} />
            {showSeparator && <Sep />}
        </span>
    );
};

export default BreadcrumbItem;
