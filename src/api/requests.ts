import axios from 'axios';
import type { WP_REST_API_Posts } from 'wp-types';

const API_URL = 'https://medside.ru/wp-json/wp/v2';
axios.defaults.baseURL = API_URL;

// export const getPosts = async (url: string) => {
//     try {
//         const res = await axios.get<WP_REST_API_Posts>(url, {
//             params: { per_page: 5 },
//         });
//         // console.log(res.data);
//         return res.data;
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             if (error.response) {
//                 console.log('Error:', error.response?.data.message);
//             } else {
//                 console.log('Error:', error.message);
//             }
//         } else if (error instanceof Error) {
//             console.log('Error:', error.message);
//         }
//     }
// };

export const getPosts = (url: string, params: {}) =>
    axios.get<WP_REST_API_Posts>(url, {
        params,
    });

// export const createPost = async () => {
//     const res = await axios.post(`${API_URL}/posts/163232`, {
//         title: 'Новатрон new',
//     });
// };
