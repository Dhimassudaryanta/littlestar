
import axios from 'axios';

export default axios.create({
    baseURL: 'https://a878aa03515f.ngrok.io',
});


// export const setAuthToken = (token) => {
//     if (token) {
//         API.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
//     } else {
//         delete API.defaults.headers.common["Authorization"]
//     }
// };