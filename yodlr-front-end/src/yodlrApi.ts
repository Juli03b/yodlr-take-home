import { UserRegister } from "../interfaces";
import axios, { AxiosResponse } from "axios";

export default class yodlrApi{
    public static async getUsers() {
        const users: AxiosResponse = await axios.get("http://localhost:3000/users");
        return users.data;
    }
    public static async register(formData: UserRegister) {
        const user: AxiosResponse = await axios.post("http://localhost:3000/users", formData);
        console.log(user)
        return user.data;
    }
    public static async deleteUser(userId: number) {
        const user: AxiosResponse = await axios.delete(`http://localhost:3000/users/${userId}`);
        console.log(user)
        return user;
    }
}