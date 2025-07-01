// готовые типы данных из библиотеки wp-types
import type { WP_REST_API_Post, WP_REST_API_Category, WP_REST_API_Comment } from 'wp-types';

// тип данных для постов (с кастомным полем изображения)
export interface WPPostImg extends WP_REST_API_Post {
    featured_image: string;
}

// тип данных для категорий
export interface WPCategory extends WP_REST_API_Category {}

// тип данных для комментариев
export interface WPComment extends WP_REST_API_Comment {
    comment_excerpt: string;
    post_slug: string;
    post_title: string;
}

// тип данных для блока Rusfond
export interface WPRusfondData {
    child_name: string;
    description: string;
    url: string;
    image: string;
}

// типы данных из кастомного эндпоинта на сервере
// основной тип данных для постов
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
        sim_block_title?: string;
        sim_block_array?: {
            post_ID: number;
            post_slug: string;
            post_title: string;
            post_image: string;
        }[];
        tags_block_array?: {
            post_ID: number;
            post_slug: string;
            post_title: string;
            post_image: string;
        }[];
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
        metadata?: WPBolezniMetadata | WPDietsMetadata | WPDrugsMetadata | WPSubstancesMetadata | WPStatiMetadata | WPServicesMetadata;
    };
}

// тип метаданных в постах категории Болезни (Симптомы)
interface WPBolezniMetadata {
    sources?: string;
    doctors?: string;
    drugs?: string;
    diets?: string;
    mkb10?: string;
}

// тип метаданных в постах категории Диеты
interface WPDietsMetadata {
    diet_result?: string;
    diet_time?: string;
    diet_cost?: string;
    diet_products_ok?: string;
    diet_products_not_ok?: string;
    diet_label?: string;
}

// тип метаданных в постах категории Лекарства
interface WPDrugsMetadata {
    drug_lat?: string;
    drug_fabric?: string;
    drug_code?: string;
    drug_subst?: string;
    drug_farm_group?: string;
    drug_lek_form?: string;
}

// тип метаданных в постах категории Действующие вещества
interface WPSubstancesMetadata {
    drug_cas?: string;
    drug_formula?: string;
    drug_lat?: string;
    drug_code?: string;
}

// тип метаданных в постах категории Справочник
interface WPStatiMetadata {
    sources?: string;
}

// тип метаданных в постах категории Услуги (Диагностики)
interface WPServicesMetadata {
    sources?: string;
    service_id?: string;
}

// тип данных для постов в категории Болезни
export interface WPBolezniData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type' | 'metadata'> & {
        cat_type: 'bolezni';
        metadata: WPBolezniMetadata;
    };
}

// тип данных для постов в категории Симптомы
export interface WPSymptomsData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type' | 'metadata'> & {
        cat_type: 'symptoms';
        metadata: WPBolezniMetadata;
    };
}

// тип данных для постов в категории Диеты
export interface WPDietsData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type' | 'metadata'> & {
        cat_type: 'diets';
        metadata: WPDietsMetadata;
    };
}

// тип данных для постов в категории Лекарства
export interface WPDrugsData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type' | 'metadata'> & {
        cat_type: 'lekarstva';
        metadata: WPDrugsMetadata;
    };
}

// тип данных для постов в категории Действующие вещества
export interface WPSubstancesData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type' | 'metadata'> & {
        cat_type: 'active-substances';
        metadata: WPSubstancesMetadata;
    };
}

// тип данных для постов в категории Справочник
export interface WPStatiData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type' | 'metadata'> & {
        cat_type: 'stati';
        metadata: WPStatiMetadata;
    };
}

// тип данных для постов в категории Новости
export interface WPNewsData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type'> & {
        cat_type: 'novosti-meditsinyi';
    };
}

// тип данных для постов в категории Словарь терминов
export interface WPSlovarData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type'> & {
        cat_type: 'meditsinskiy-slovar';
    };
}

// тип данных для постов в категории Диагностики
export interface WPDiagnosticsData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type' | 'metadata'> & {
        cat_type: 'diagnostics';
        metadata: WPServicesMetadata;
    };
}

// тип данных для постов в категории Услуги
export interface WPServicesData extends Omit<WPPostData, 'data'> {
    data: Omit<WPPostData['data'], 'cat_type' | 'metadata'> & {
        cat_type: 'services';
        metadata: WPServicesMetadata;
    };
}

// основной тип данных для страниц
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

// основной тип данных для докторов
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
        sim_block_title: string;
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

// основной тип данных для клиник
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
        sim_block_title: string;
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

// основной тип данных для категорий
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

// объединенный тип данных для полученной по slug информации
export type WPDataBySlug = WPPostData | WPPageData | WPDoctorData | WPClinicData | WPCategoryData;
