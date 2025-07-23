export function ucFirst(str: string) {
    if (!str) return '';
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}
