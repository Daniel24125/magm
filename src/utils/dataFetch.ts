
import useSWR from 'swr'
import axios from 'axios'
import { TAxiosConfig, TFetchedDataSchema } from '@/types/DataFetch'

export const fetcher = (config: TAxiosConfig)=> axios({
    method: config.method,
    url: config.url,
    data: config.body,
    headers: config.headers
}).then(res => res.data)

export const useFetchData = (action: any, params?: any, canFetch: boolean = true)=>{ 
    const { data, error, mutate, isValidating: isLoading} = useSWR<TFetchedDataSchema>(canFetch ? params: null, action, {
        revalidateOnFocus: false
    }) 
    return {data, isLoading, error, mutate}
}

