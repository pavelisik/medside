import axios from 'axios';
import type {
    WPPostImg,
    WPCategory,
    WPComment,
    WPRusfondData,
    WPDataBySlug,
} from '../../types/wpTypes';

const api = axios.create({
    baseURL: 'https://medside.ru/wp-json/wp/v2',
});
const custom_api = axios.create({
    baseURL: 'https://medside.ru/wp-json/custom/v1',
});
const defaultFieldsPosts = { _fields: 'id,title,slug,featured_image' };
const defaultFieldsCategories = { _fields: 'id,count,name,slug' };
const defaultFieldsComments = {
    _fields: 'id,author_name,comment_excerpt,date,post,post_slug,post_title',
};

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

export const getPosts = async <T = WPPostImg>(
    url: string,
    params: Record<string, any>
): Promise<T[] | undefined> => {
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

export const getComments = async (
    url: string,
    params: Record<string, any>
): Promise<WPComment[] | undefined> => {
    try {
        const mergedParams = { ...defaultFieldsComments, ...params };
        const res = await api.get<WPComment[]>(url, { params: mergedParams });
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
        const query = page !== undefined ? `?page=${page}` : '';
        const url = `/${type}/${slug}${query}`;
        const res = await custom_api.get<WPDataBySlug>(url);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

export const getRusfondData = async (
    url: string
): Promise<WPRusfondData[] | undefined> => {
    try {
        const res = await custom_api.get<WPRusfondData[]>(url);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
    }
};
