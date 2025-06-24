interface ParseFullPathParams {
    slug: string;
    page: number;
    cleanPath?: string;
}

export const parseFullPath = (fullPath: string): ParseFullPathParams => {
    const path = fullPath.replace(/^\/+|\/+$/g, '');
    const parts = path.split('/');

    let page: number | null = null;
    let cleanPath: string | undefined;

    const pageIndex = parts.indexOf('page');

    if (pageIndex !== -1 && parts[pageIndex + 1]) {
        page = parseInt(parts[pageIndex + 1], 10);
        cleanPath = '/' + parts.slice(0, pageIndex).join('/');
        parts.splice(pageIndex, 2);
    }

    const pathParts = [...parts];
    const slug = pathParts.length > 0 ? pathParts[pathParts.length - 1] : '';

    return {
        slug,
        page: page ?? 1,
        cleanPath,
    };
};
