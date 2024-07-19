import { Model } from "mongoose";

export type TMongoFetcherSchema = {
    GenericModel: Model<any>,
    data: any}