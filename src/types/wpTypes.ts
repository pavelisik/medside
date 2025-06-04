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
