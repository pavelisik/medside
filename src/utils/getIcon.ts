import { bolCatIcons } from '../assets/images/bol-label';
import { dietCatIcons, dietLabelIcons } from '../assets/images/diet-label';

export const getIcon = (id: number, slug: 'bol' | 'diet', type: 'Cat' | 'Label' = 'Cat'): string | undefined => {
    const key = `${slug}${type}${id}`;

    if (slug === 'diet') {
        if (type === 'Cat') {
            return dietCatIcons[key as keyof typeof dietCatIcons];
        } else if (type === 'Label') {
            return dietLabelIcons[key as keyof typeof dietLabelIcons];
        }
    } else if (slug === 'bol') {
        return bolCatIcons[key as keyof typeof bolCatIcons];
    }

    return undefined;
};
