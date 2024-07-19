import useSWR from 'swr'
import axios from 'axios'
import { TAsyncDataFetcherConfig, TAxiosConfig, TDataFetchConfigSchema, TFetchDataSchema, TFetchedDataSchema } from '@/types/DataFetch'
let request = require("request")

const fetcher = (config: TAxiosConfig)=> axios({
    method: config.method,
    url: config.url,
    data: config.body,
    headers: config.headers
}).then(res => res.data)

export const useFetchData = (config: TDataFetchConfigSchema, canFetch: boolean = true)=>{
    const { data, error, mutate, isValidating: isLoading} = useSWR<TFetchedDataSchema>(canFetch ? config: null, fetcher, {
        revalidateOnFocus: false
    })   
    return {data, error, isLoading , mutate}
}


export const asyncRequestFetcher = (config: TAsyncDataFetcherConfig)=>{
    return new Promise((resolve, reject)=>{
        request(config, (error:any, response:any, body:any)=> {
            if(response.headers["content-type"].includes("text/html")){
                resolve(body)
                return;
            }
            const result = body? JSON.parse(body): ""; 
            if (error){
                reject(new Error(error))
            }
            if(result && !result._id){

                if(result.statusCode === 400){
                    reject(new Error("The email you provide already exists"))
                }
                reject(new Error(result.name))
            }
            resolve(result)
        });
    })
}