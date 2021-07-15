
import axios from 'axios';

export default axios.create({
    baseURL: 'https://2a889577ff74.ngrok.io',
});


// export const setAuthToken = (token) => {
//     if (token) {
//         API.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
//     } else {
//         delete API.defaults.headers.common["Authorization"]
//     }
// };