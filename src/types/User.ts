import { Document } from "mongoose"
import { ProjectSchema, ProjectSettingsSchema } from "./Projects"

export type AccountSettingsSchema = {
    fName: string, 
    lName: string
}

export interface IUserSchema extends Document {
    fName: string | null, 
    email: string | null, 
    isLoading: boolean, 
    projects: ProjectSchema[],
    defaultProjectSettings: ProjectSettingsSchema | null, 
    accountSettings: AccountSettingsSchema | null
}

export type UserSignupSchema = {
    fName?: string, 
    email?: string, 
    password?: string, 
}