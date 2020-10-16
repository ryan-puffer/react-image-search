import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -0hsiIPM_26_T6rJ2iwAgymkuLCwpSDE1p-L2-dJeA8'
    }
})