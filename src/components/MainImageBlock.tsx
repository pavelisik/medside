interface MainImageBlockProps {
    image: string;
    title: string;
    alt?: string;
}

const MainImageBlock = ({ image, title, alt }: MainImageBlockProps) => {
    return (
        <div className="main-image-block">
            <img src={image} alt={title} itemProp="image" />
            {alt && <span>{alt}</span>}
        </div>
    );
};

export default MainImageBlock;
