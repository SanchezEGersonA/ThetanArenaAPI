export default interface User {
    user_inactive: boolean,
    user_firstname: string,
    user_lastname: string,
    user_gender?: string,
    user_email: string,
    user_password: string,
    user_birthday?: Date
}