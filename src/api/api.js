import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export const buscar = async (searchkey) => {
    const type = searchkey ? "search" : "discover";
    const endpoint = `/${type}/movie`;
    const apikey = process.env.REACT_APP_MOVIE_API_KEY;
    const response = await api.get(endpoint, {
        params: {
            api_key: apikey,
            query: searchkey
        }
    })
    return response.data;
}

export const video = async (id) => {
    const endpoint = `/movie/${id}`;
    const apikey = process.env.REACT_APP_MOVIE_API_KEY;
    const response = await api.get(endpoint, {
        params: {
            api_key: apikey,
            append_to_response: 'videos'
        }
    })
    return response.data;
}