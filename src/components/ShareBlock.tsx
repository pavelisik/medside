import { useEffect, useRef } from 'react';

interface ShareBlockProps {
    className?: string;
    title: string;
    description: string;
    image: string | null;
}

const ShareBlock = ({ className = '', title, description, image }: ShareBlockProps) => {
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (!scriptLoaded.current && typeof window !== 'undefined') {
            // проверка наличия скрипта в DOM
            if (!document.querySelector('script[src="https://yastatic.net/share2/share.js"]')) {
                const script = document.createElement('script');
                script.src = 'https://yastatic.net/share2/share.js';
                script.async = true;
                document.body.appendChild(script);
            }
            scriptLoaded.current = true;
        }
    }, []);

    return (
        <div className={className}>
            <div
                className="ya-share2"
                data-curtain
                data-services="vkontakte,odnoklassniki,telegram,twitter,viber,whatsapp"
                data-title={title}
                data-description={description}
                data-image={image || undefined}
                data-hashtags:twitter="медицина,здоровье"
            ></div>
        </div>
    );
};

export default ShareBlock;
