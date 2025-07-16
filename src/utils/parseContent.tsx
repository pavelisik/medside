import parse, { domToReact } from 'html-react-parser';
import type { HTMLReactParserOptions, DOMNode, Element } from 'html-react-parser';
import type { WPBolezniMetadata } from '../types/wpTypes';
import PostsSwiper from '../components/PostsSwiper';
import DietsBlock from '../components/DietsBlock';

interface ParseContentArgs {
    content: string;
    drugs?: WPBolezniMetadata['drugs'];
    diets?: WPBolezniMetadata['diets'];
}

export const parseContent = ({ content, drugs, diets }: ParseContentArgs) => {
    const siteUrl = 'https://medside.ru';
    const localUrl = typeof window !== 'undefined' ? window.location.origin : siteUrl;

    let replacedContent = content;

    // заменяем [diets] на простой текст
    if (diets && Array.isArray(diets)) {
        const dietsText = diets.map((d) => d.name).join(', ');
        replacedContent = replacedContent.replace(/\[diets\]/gi, dietsText);
    }

    const options: HTMLReactParserOptions = {
        replace: (domNode: DOMNode) => {
            // заменяем ссылки на локальные
            if (domNode.type === 'tag' && domNode.name === 'a' && 'attribs' in domNode && domNode.attribs?.href?.startsWith(siteUrl)) {
                const el = domNode as Element;
                const newHref = el.attribs.href.replace(siteUrl, localUrl);

                return (
                    <a {...el.attribs} href={newHref}>
                        {domToReact(el.children as DOMNode[], options)}
                    </a>
                );
            }

            if (domNode.type === 'tag' && domNode.name === 'div' && 'attribs' in domNode && domNode.attribs['data-component'] === 'drugs-swiper') {
                return <PostsSwiper data={drugs} />;
            }

            if (domNode.type === 'tag' && domNode.name === 'div' && 'attribs' in domNode && domNode.attribs['data-component'] === 'diets-block') {
                return <DietsBlock data={diets} />;
            }

            return undefined;
        },
    };

    return parse(replacedContent, options);
};
