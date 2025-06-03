const API = 'https://medside.ru/wp-json/wp/v2';

export async function fetchPostBySlug(slug: string) {
    const res = await fetch(`${API}/posts?slug=${slug}`);
    const data = await res.json();
    return data.length > 0 ? data[0] : null;
}

// export async function fetchPageBySlug(slug: string) {
//   const res = await fetch(`${API}/pages?slug=${slug}`);
//   const data = await res.json();
//   return data.length > 0 ? data[0] : null;
// }

// export async function fetchCategoryBySlug(slug: string) {
//   const res = await fetch(`${API}/categories?slug=${slug}`);
//   const data = await res.json();
//   return data.length > 0 ? data[0] : null;
// }
