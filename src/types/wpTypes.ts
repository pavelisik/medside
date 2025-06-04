// типы данных из библиотеки wp-types
import type { WP_REST_API_Post, WP_REST_API_Category } from 'wp-types';

export interface WPPostImg extends WP_REST_API_Post {
    featured_image: string;
}

export interface WPCategory extends WP_REST_API_Category {}

// типы данных из кастомного эндпоинта на сервере
export interface WPPostData {
    type: string;
    subtype: string;
    data: {
        id: number;
        slug: string;
        title: string;
        date: string;
        featured_image: string;
        post_author: {};
        categories: any[];
        parents_count: number;
        parent_cat_first?: {};
        parent_cat_second?: {};
        content: string;
        metadata: {};
    };
}

export interface WPCategoryData {
    type: string;
    subtype: string;
    data: {
        id: number;
        slug: string;
        name: string;
        description: string;
    };
}

export type WPDataBySlug = WPPostData | WPCategoryData;
