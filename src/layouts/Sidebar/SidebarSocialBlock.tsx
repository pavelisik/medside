import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './SidebarSocialBlock.module.css';

declare global {
    interface Window {
        VK: {
            Widgets: {
                Group: (elementId: string, options: Record<string, string | number>, groupId: number) => void;
            };
        };
    }
}

const SidebarSocialBlock = () => {
    const vkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://vk.com/js/api/openapi.js?168';
        script.async = true;

        script.onload = () => {
            if (window.VK && window.VK.Widgets) {
                window.VK.Widgets.Group(
                    'vk_groups',
                    {
                        mode: 3,
                        width: 341,
                        color1: 'FFFFFF',
                        color2: '242424',
                        color3: '71939d',
                    },
                    41298605
                );
            }
        };

        document.head.appendChild(script);

        return () => {
            const vkContainer = document.getElementById('vk_groups');
            if (vkContainer) vkContainer.innerHTML = '';
        };
    }, []);

    return (
        <div className="sidebar-block socialgroup-block">
            <h2>ВКонтакте</h2>
            <div className={clsx('sidebar-block-body', styles.socialBlock)}>
                <div className="vk-block">
                    <div id="vk_groups" ref={vkRef}></div>
                </div>
            </div>
        </div>
    );
};

export default SidebarSocialBlock;
