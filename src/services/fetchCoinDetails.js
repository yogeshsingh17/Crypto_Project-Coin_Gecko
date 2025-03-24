import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id){
    try{
        const response = await axiosInstance.get(`/coins/${id}`)        /*axiosInstance will get the base URL 
                                                                          of the coingecko website.*/
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}