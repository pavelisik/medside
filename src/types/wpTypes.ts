// типы данных из библиотеки wp-types
import type { WP_REST_API_Post, WP_REST_API_Category } from 'wp-types';

export interface WPPostImg extends WP_REST_API_Post {
    featured_image: string;
}

export interface WPCategory extends WP_REST_API_Category {}

// типы данных из кастомного эндпоинта на сервере
export interface WPPostData {
    type: 'post_type';
    subtype: 'post';
    data: {
        id: number;
        slug: string;
        title: string;
        date: string;
        date_m: string;
        featured_image: string | null;
        categories: {
            term_id: number;
            name: string;
            slug: string;
        }[];
        parent_cat_first?: {
            term_id: number;
            name: string;
            slug: string;
        };
        parent_cat_second?: {
            term_id: number;
            name: string;
            slug: string;
        };
        parents_count: 0 | 1 | 2;
        cat_type:
            | 'bolezni'
            | 'symptoms'
            | 'diets'
            | 'lekarstva'
            | 'active-substances'
            | 'stati'
            | 'novosti-meditsinyi'
            | 'diagnostics'
            | 'services'
            | 'meditsinskiy-slovar';
        post_author: {
            author_ID: number;
            author_slug: string;
            author_name: string;
            author_info: string;
        };
        head_title: string;
        head_description: string;
        rating: number;
        rating_count: number;
        keys: string;
        content: string;
        metadata?:
            | WPBolezniMetadata
            | WPDietsMetadata
            | WPLekarstvaMetadata
            | WPActiveSubstancesMetadata
            | WPStatiMetadata
            | WPServicesMetadata;
    };
}

interface WPBolezniMetadata {
    sources?: string;
    doctors?: string;
    drugs?: string;
    diets?: string;
    mkb10?: string;
}
interface WPDietsMetadata {
    diet_result?: string;
    diet_time?: string;
    diet_cost?: string;
    diet_products_ok?: string;
    diet_products_not_ok?: string;
    diet_label?: string;
}

interface WPLekarstvaMetadata {
    drug_lat: string;
    drug_fabric: string;
    drug_code: string;
    drug_subst: string;
    drug_farm_group: string;
    drug_lek_form: string;
}

interface WPActiveSubstancesMetadata {
    drug_cas: string;
    drug_formula: string;
    drug_lat: string;
    drug_code: string;
}

interface WPStatiMetadata {
    sources: string;
}

interface WPServicesMetadata {
    sources: string;
    service_id: string;
}

export interface WPPageData {
    type: 'post_type';
    subtype: 'page';
    data: {
        id: number;
        slug: string;
        title: string;
        date: string;
        content: string;
    };
}

export interface WPDoctorData {
    type: 'post_type';
    subtype: 'doctor';
    data: {
        id: number;
        slug: string;
        title: string;
        date: string;
        categories: {
            term_id: number;
            name: string;
            slug: string;
        }[];
        parent_cat_first?: {
            term_id: number;
            name: string;
            slug: string;
        };
        parents_count: 1;
        cat_type: 'doctors';
        content: string;
        metadata: {
            name: string;
            alias: string;
            description: string;
            city: string;
            category: string;
            degree: string;
            sex: string;
            departure: string;
            rank: string;
            expirience_year: string;
            price: string;
            rating: string;
            internal_rating: string;
            doc_id: string;
            doctor_self_id: string;
            is_active: string;
            kidsreception: string;
            education: string;
            association: string;
            degreetext: string;
            spec: string;
            course: string;
            experience: string;
            img: string;
            is_rewritetext: string;
        };
    };
}

export interface WPClinicData {
    type: 'post_type';
    subtype: 'clinic';
    data: {
        id: number;
        slug: string;
        title: string;
        date: string;
        categories: {
            term_id: number;
            name: string;
            slug: string;
        }[];
        parent_cat_first?: {
            term_id: number;
            name: string;
            slug: string;
        };
        parents_count: 1;
        cat_type: 'clinics';
        content: string;
        metadata: {
            name: string;
            shortname: string;
            rewrite_name: string;
            description: string;
            longitude: string;
            latitude: string;
            city: string;
            city_id: string;
            district: string;
            districtid: string;
            street: string;
            streetid: string;
            house: string;
            schedulestate: string;
            phoneappointment: string;
            phone: string;
            url: string;
            email: string;
            minprice: string;
            maxprice: string;
            isdiagnostic: string;
            isclinic: string;
            isdoctor: string;
            clinic_id: string;
            clinic_self_id: string;
            orderclin: string;
            clinrating: string;
            type: string;
            logo: string;
        };
    };
}

export interface WPCategoryData {
    type: string;
    subtype: string;
    data: {
        id: number;
        slug: string;
        name: string;
        parent: number;
        count: number;
        page: number;
        pages: number;
        parent_slug?: string;
        parent_name?: string;
        is_with_posts: boolean;
        cats_array?: {
            cat_ID: number;
            cat_slug: string;
            cat_title: string;
            cat_is_child: boolean;
        }[];
        posts_array?: {
            post_ID: number;
            post_slug: string;
            post_title: string;
            post_image: string;
            post_date: string;
            post_excerpt: string;
        }[];
    };
}

export type WPDataBySlug = WPPostData | WPPageData | WPDoctorData | WPClinicData | WPCategoryData;
