import {
    IUserSchema
} from "@/types/User";
import mongoose, {
    Schema
} from "mongoose";




const userSchema: Schema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true
    },
    projects: {
        type: Array,
    },
    defaultProjectSettings: {
        type: Object,
    },
    accountSettings: {
        type: Object,
    }

})

const User = mongoose.models.User || mongoose.model < IUserSchema > ("User", userSchema)

export default User