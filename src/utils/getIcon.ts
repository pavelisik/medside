import { bolCatIcons } from '../assets/images/bol-label';
import { dietCatIcons, dietLabelIcons } from '../assets/images/diet-label';
import { ucFirst } from './ucFirst';

export const getIcon = (id: number, slug: 'bol' | 'diet', type: 'cat' | 'label' = 'cat'): string | undefined => {
    const key = `${slug}${ucFirst(type)}${id}`;

    if (slug === 'diet') {
        if (type === 'cat') {
            return dietCatIcons[key as keyof typeof dietCatIcons];
        } else if (type === 'label') {
            return dietLabelIcons[key as keyof typeof dietLabelIcons];
        }
    } else if (slug === 'bol') {
        return bolCatIcons[key as keyof typeof bolCatIcons];
    }

    return undefined;
};
