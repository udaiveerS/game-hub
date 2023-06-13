import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '93ef959409a9425dafe58e3c25b3467d'
    }
})