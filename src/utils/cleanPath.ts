export const cleanPath = (fullPath: string): string => {
    const path = fullPath.replace(/^\/+|\/+$/g, '');
    const parts = path.split('/');

    const pageIndex = parts.indexOf('page');

    if (pageIndex !== -1 && parts[pageIndex + 1]) {
        const maybePage = parseInt(parts[pageIndex + 1], 10);
        if (!isNaN(maybePage)) {
            return '/' + parts.slice(0, pageIndex).join('/');
        }
    }

    return fullPath;
};
