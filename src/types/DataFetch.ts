import { KeyedMutator } from "swr"

export type TAxiosMethod = "GET" | "POST" | "PATCH"| "DELETE" | "PUT"

export type TFetchedDataSchema = {
    result: any, 
    errorMessage: null | string
}

export type TFetchDataSchema = {
    data: TFetchedDataSchema, 
    error: any, 
    mutate: KeyedMutator<any>, 
    isValidating: boolean 
}

export type TAxiosConfig = {
    method: TAxiosMethod,
    url: string, 
    body: any,
    headers: any
}

export type TDataFetchConfigSchema = {
    url:string, 
    method: TAxiosMethod,
    body?: any, 
    headers?: any,
}

export type TAsyncDataFetcherConfig = {
    url: string, 
    method: TAxiosMethod,
    headers?: any, 
    body?: any
}