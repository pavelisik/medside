import type { WPDataBySlug, WPPostData, WPPageData, WPDoctorData, WPClinicData, WPCategoryData } from './wpTypes';

export function isPostData(data: WPDataBySlug): data is WPPostData {
    return data.subtype === 'post';
}

export function isPageData(data: WPDataBySlug): data is WPPageData {
    return data.subtype === 'page';
}

export function isDoctorData(data: WPDataBySlug): data is WPDoctorData {
    return data.subtype === 'doctor';
}

export function isClinicData(data: WPDataBySlug): data is WPClinicData {
    return data.subtype === 'clinic';
}

export function isCategoryData(data: WPDataBySlug): data is WPCategoryData {
    return data.subtype === 'category';
}
