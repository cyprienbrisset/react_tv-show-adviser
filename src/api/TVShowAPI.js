import axios from "axios";
import {BASE_URL, LANG, TOKEN} from "../config";

const config = {
    headers: { Authorization: `Bearer ${TOKEN}` }
};

export class TVShowAPI {

    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}movie/popular?language=${LANG}`, config)
        return response.data.results
    }

    static async fetchRecommendations(id){
        const response = await axios.get(`${BASE_URL}movie/${id}/recommendations?language=${LANG}`, config)
        console.log(response.data.results)
        return response.data.results
    }

    static async fetchByTitle(title){
        const response = await axios.get(`${BASE_URL}search/movie?query=${title}`, config)
        console.log(response.data.results)
        return response.data.results
    }
}