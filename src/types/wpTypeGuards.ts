import type { WPDataBySlug, WPPostData, WPPageData, WPDoctorData, WPClinicData, WPCategoryData } from './wpTypes';
import type {
    WPBolezniData,
    WPSymptomsData,
    WPDietsData,
    WPDrugsData,
    WPSubstancesData,
    WPStatiData,
    WPNewsData,
    WPSlovarData,
    WPDiagnosticsData,
    WPServicesData,
} from './wpTypes';

// TypeGuard для данных постов
export function isPostData(data: WPDataBySlug): data is WPPostData {
    return data.subtype === 'post';
}

// TypeGuard для данных страниц
export function isPageData(data: WPDataBySlug): data is WPPageData {
    return data.subtype === 'page';
}

// TypeGuard для данных докторов
export function isDoctorData(data: WPDataBySlug): data is WPDoctorData {
    return data.subtype === 'doctor';
}

// TypeGuard для данных клиник
export function isClinicData(data: WPDataBySlug): data is WPClinicData {
    return data.subtype === 'clinic';
}

// TypeGuard для данных категорий
export function isCategoryData(data: WPDataBySlug): data is WPCategoryData {
    return data.subtype === 'category';
}

// TypeGuard для данных постов из категории Болезни
export function isBolezniData(data: WPPostData): data is WPBolezniData {
    return data.data.cat_type === 'bolezni';
}

// TypeGuard для данных постов из категории Симптомы
export function isSymptomsData(data: WPPostData): data is WPSymptomsData {
    return data.data.cat_type === 'symptoms';
}

// TypeGuard для данных постов из категории Диеты
export function isDietsData(data: WPPostData): data is WPDietsData {
    return data.data.cat_type === 'diets';
}

// TypeGuard для данных постов из категории Лекарства
export function isDrugsData(data: WPPostData): data is WPDrugsData {
    return data.data.cat_type === 'lekarstva';
}

// TypeGuard для данных постов из категории Действующие вещества
export function isSubstancesData(data: WPPostData): data is WPSubstancesData {
    return data.data.cat_type === 'active-substances';
}

// TypeGuard для данных постов из категории Справочник
export function isStatiData(data: WPPostData): data is WPStatiData {
    return data.data.cat_type === 'stati';
}

// TypeGuard для данных постов из категории Новости
export function isNewsData(data: WPPostData): data is WPNewsData {
    return data.data.cat_type === 'novosti-meditsinyi';
}

// TypeGuard для данных постов из категории Диагностики
export function isDiagnosticsData(data: WPPostData): data is WPDiagnosticsData {
    return data.data.cat_type === 'diagnostics';
}

// TypeGuard для данных постов из категории Услуги
export function isServicesData(data: WPPostData): data is WPServicesData {
    return data.data.cat_type === 'services';
}

// TypeGuard для данных постов из категории Словарь терминов
export function isSlovarData(data: WPPostData): data is WPSlovarData {
    return data.data.cat_type === 'meditsinskiy-slovar';
}
