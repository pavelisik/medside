import parse, { domToReact } from 'html-react-parser';
import type { HTMLReactParserOptions, DOMNode, Element } from 'html-react-parser';
import type { WPBolezniMetadata } from '../types/wpTypes';

interface ParseContentArgs {
    content: string;
    drugs?: WPBolezniMetadata['drugs'];
    diets?: WPBolezniMetadata['diets'];
}

export const parseContent = ({ content, drugs, diets }: ParseContentArgs) => {
    const siteUrl = 'https://medside.ru';
    const localUrl = window.location.origin;

    let replacedContent = content;

    // заменяем [drugs], если передано значение
    if (drugs && Array.isArray(drugs)) {
        // <div className="swiper-block">
        //     <div className="swiper-container sw">
        //         <div className="swiper-wrapper">
        //         drugs.map(() => (
        //             <div className="swiper-slide">
        //                 <a href="" title="">
        //                     <img src="" />
        //                 </a>
        //             </div>
        //         ))
        //         </div>
        //     </div>
        //     <div className="swiper-button-prev sw-but-prev"></div>
        //     <div className="swiper-button-next sw-but-next"></div>
        // </div>
        // replacedContent = replacedContent.replace(/\[drugs\]/gi, drugs);
    }

    // заменяем [diets], если передано значение
    if (diets && Array.isArray(diets)) {
        // Преобразуем в строку, например: "диета1, диета2"
        const dietsText = diets.map((d) => d.name).join(', ');
        replacedContent = replacedContent.replace(/\[diets\]/gi, dietsText);
    }

    const options: HTMLReactParserOptions = {
        replace: (domNode: DOMNode) => {
            if (domNode.type === 'tag' && domNode.name === 'a' && 'attribs' in domNode && domNode.attribs?.href?.startsWith(siteUrl)) {
                const el = domNode as Element;
                const newHref = el.attribs.href.replace(siteUrl, localUrl);

                return (
                    <a {...el.attribs} href={newHref}>
                        {domToReact(el.children as DOMNode[], options)}
                    </a>
                );
            }

            return undefined;
        },
    };

    return parse(replacedContent, options);
};
