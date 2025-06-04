import type { WPDataBySlug, WPPostData, WPCategoryData } from './wpTypes';

export function isWPPostData(data: WPDataBySlug): data is WPPostData {
    return data.subtype === 'post';
}

export function isWPCategoryData(data: WPDataBySlug): data is WPCategoryData {
    return data.subtype === 'category';
}
