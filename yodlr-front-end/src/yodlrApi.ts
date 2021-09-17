import { User } from "../interfaces";
import axios, { AxiosResponse } from "axios";

export default class yodlrApi{
    public static async getUsers() {
        const users: AxiosResponse = await axios.get("http://localhost:3000/users");
        return users.data;
    }
}