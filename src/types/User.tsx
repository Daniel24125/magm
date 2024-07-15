import { ProjectSchema, ProjectSettingsSchema } from "./Projects"

export type AccountSettingsSchema = {
    fName: string, 
    lName: string
}

export type UserSchema = {
    fName: string | null, 
    lName: string | null, 
    email: string | null, 
    isLoading: boolean, 
    projects: ProjectSchema[],
    defaultProjectSettings: ProjectSettingsSchema | null, 
    accountSettings: AccountSettingsSchema | null
}
