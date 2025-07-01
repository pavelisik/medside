import BreadcrumbsList from './BreadcrumbsList';
import BreadcrumbsItem from './BreadcrumbsItem';
import type { WPDataBySlug } from '../../types/wpTypes';
import { isCategoryData, isPageData, isPostData, isDoctorData, isClinicData } from '../../types/wpTypeGuards';

interface BreadcrumbsProps {
    data?: WPDataBySlug;
    isNoMatch?: boolean;
}

const Breadcrumbs = ({ data, isNoMatch }: BreadcrumbsProps) => {
    if (data && isCategoryData(data)) {
        const { name, parent_name, parent_slug } = data.data;
        return (
            <BreadcrumbsList>
                {parent_name && parent_slug && <BreadcrumbsItem title={parent_name} slug={`/${parent_slug}`} position={2} />}
                <BreadcrumbsItem title={name} position={parent_slug ? 3 : 2} showSeparator={false} />
            </BreadcrumbsList>
        );
    } else if (data && isPageData(data)) {
        const { title } = data.data;
        return (
            <BreadcrumbsList>
                <BreadcrumbsItem title={title} position={2} showSeparator={false} />
            </BreadcrumbsList>
        );
    } else if (data && isPostData(data)) {
        const { categories, parents_count, parent_cat_first, parent_cat_second } = data.data;
        if (!categories?.[0]) return null;
        return (
            <BreadcrumbsList>
                {parents_count === 0 && <BreadcrumbsItem title={categories[0].name} slug={`/${categories[0].slug}`} position={2} showSeparator={false} />}
                {parents_count === 1 && parent_cat_first && (
                    <>
                        <BreadcrumbsItem title={parent_cat_first.name} slug={`/${parent_cat_first.slug}`} position={2} />
                        <BreadcrumbsItem
                            title={categories[0].name}
                            slug={`/${parent_cat_first.slug}/${categories[0].slug}`}
                            position={3}
                            showSeparator={false}
                        />
                    </>
                )}
                {parents_count === 2 && parent_cat_first && parent_cat_second && (
                    <>
                        <BreadcrumbsItem title={parent_cat_second.name} slug={`/${parent_cat_second.slug}`} position={2} />
                        <BreadcrumbsItem
                            title={categories[0].name}
                            slug={`/${parent_cat_second.slug}/${parent_cat_first.slug}/${categories[0].slug}`}
                            position={3}
                            showSeparator={false}
                        />
                    </>
                )}
            </BreadcrumbsList>
        );
    } else if (data && isDoctorData(data)) {
        const { categories, parent_cat_first } = data.data;
        if (!categories?.[0]) return null;
        return (
            <BreadcrumbsList>
                {parent_cat_first && (
                    <>
                        <BreadcrumbsItem title={parent_cat_first.name} slug={`/${parent_cat_first.slug}`} position={2} />
                        <BreadcrumbsItem
                            title={categories[0].name}
                            slug={`/${parent_cat_first.slug}/${categories[0].slug}`}
                            position={3}
                            showSeparator={false}
                        />
                    </>
                )}
            </BreadcrumbsList>
        );
    } else if (data && isClinicData(data)) {
        const { parent_cat_first } = data.data;
        return (
            <BreadcrumbsList>
                {parent_cat_first && <BreadcrumbsItem title={parent_cat_first.name} slug={`/${parent_cat_first.slug}`} position={2} showSeparator={false} />}
            </BreadcrumbsList>
        );
    } else if (isNoMatch) {
        return (
            <BreadcrumbsList>
                <BreadcrumbsItem title="Страница не найдена" position={2} showSeparator={false} />
            </BreadcrumbsList>
        );
    }
    return null;
};

export default Breadcrumbs;
