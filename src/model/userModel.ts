import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import User from "../interface/userInterface";

const UserSchema = new Schema<User>({

    user_inactive: {
        type: Boolean,
        default: false,
        required: false
    },

    user_firstname: {
        type: String,
        required: [ true, "The user's first name is required!" ]
    },

    user_lastname: {
        type: String,
        required: [ true, "The user's last name is required!" ]
    },

    user_gender: {
        type: String,
        required: false
    },

    user_email: {
        type: String,
        unique: true,
        required: [ true, "The user's email address is required!" ]
    },

    user_password: {
        type: String,
        required: [ true, "The user's password is required!" ]
    },

    user_birthday: {
        type: Date,
        required: false
    }

});

UserSchema.methods.toJSON = function() {
    let userObject = this.toObject();
    delete userObject.user_password;
    delete userObject.user_inactive;
    return userObject;
}

UserSchema.plugin(uniqueValidator, {
    message: "{PATH} should be unique!"
});

export default model<User>("User", UserSchema);
