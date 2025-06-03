import axios from 'axios';
import type { WP_REST_API_Post as WPPost, WP_REST_API_Category as WPCategory } from 'wp-types';

interface WPSlug {
    id: number;
    slug: string;
    title: string;
    date: string;
    featured_image: string;
    post_author: {};
    categories: any[];
    parents_count: number;
    parent_cat_first: {};
    parent_cat_second: {};
    content: string;
    metadata: {};
}

const api = axios.create({
    baseURL: 'https://medside.ru/wp-json/wp/v2',
});
const custom_api = axios.create({
    baseURL: 'https://medside.ru/wp-json/custom/v1/slug/',
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

export const getPosts = async <T = WPPost>(url: string, params: Record<string, any>): Promise<T[] | undefined> => {
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

export const getSlug = async <T = WPSlug>(slug: string): Promise<T | undefined> => {
    const url = slug;

    try {
        const res = await custom_api.get<T>(url);
        return res.data;
    } catch (error) {
        handleAxiosError(error);
    }
};
