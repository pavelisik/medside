import { useEffect, useRef } from 'react';

interface ShareBlockProps {
    title: string;
    description: string;
    image: string | null;
}

const ShareBlock = ({ title, description, image }: ShareBlockProps) => {
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (!scriptLoaded.current) {
            const script = document.createElement('script');
            script.src = 'https://yastatic.net/share2/share.js';
            script.async = true;
            document.body.appendChild(script);
            scriptLoaded.current = true;
        }
    }, []);

    return (
        <div className="share-block-top">
            <div
                className="ya-share2"
                data-curtain
                data-services="vkontakte,odnoklassniki,telegram,twitter,viber,whatsapp"
                data-title={title}
                data-description={description}
                data-image={image}
                data-hashtags:twitter="медицина,здоровье"
            ></div>
        </div>
    );
};

export default ShareBlock;
