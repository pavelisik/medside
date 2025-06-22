import axios from 'axios';
import type { WPPostImg, WPCategory, WPDataBySlug } from '../../types/wpTypes';

const api = axios.create({
    baseURL: 'https://medside.ru/wp-json/wp/v2',
});
const custom_api = axios.create({
    baseURL: 'https://medside.ru/wp-json/custom/v1',
});
const defaultFieldsPosts = { _fields: 'id,title,slug,featured_image' };
const defaultFieldsCategories = { _fields: 'id,count,name,slug' };

const handleAxiosError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            console.error('Ошибка API:', error.response.data.message);
        } else {
            console.error('Ошибка API:', error.message);
        }
    } else if (error instanceof Error) {
        console.error('Неожиданная ошибка:', error.message);
    } else {
        console.error('Произошла неизвестная ошибка.');
    }
};

export const getPosts = async <T = WPPostImg>(url: string, params: Record<string, any>): Promise<T[] | undefined> => {
    try {
        const mergedParams = { ...defaultFieldsPosts, ...params };
        const res = await api.get<T[]>(url, { params: mergedParams });
        return res.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

export const getCategories = async <T = WPCategory>(
    url: string,
    params: Record<string, any>
): Promise<T[] | undefined> => {
    try {
        const mergedParams = { ...defaultFieldsCategories, ...params };
        const res = await api.get<T[]>(url, { params: mergedParams });
        return res.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

export const getDataBySlug = async (
    slug: string,
    type: 'post' | 'cat',
    page?: number
): Promise<WPDataBySlug | undefined> => {
    try {
        const queryParams = new URLSearchParams();
        queryParams.set('cashed', '38');
        if (page !== undefined) {
            queryParams.set('page', page.toString());
        }
        const url = `/${type}/${slug}?${queryParams.toString()}`;
        const res = await custom_api.get<WPDataBySlug>(url);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
    }
};
