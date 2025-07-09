interface PageMenuProps {
    data: {
        item: string;
        slug: string;
    }[];
}

const PageMenu = ({ data }: PageMenuProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
        e.preventDefault();
        const element = document.getElementById(slug);
        if (element) {
            const yOffset = -15;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="page-menu">
            <ul>
                {data.map(({ item, slug }) => (
                    <li key={slug}>
                        <a href={`#${slug}`} className="icon-text" onClick={(e) => handleClick(e, slug)}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PageMenu;
