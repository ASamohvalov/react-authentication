import axios from "axios";
import { URL } from "./http";

const getAllUsers = async () => {
    try {
        const response = await axios({
            url: `${URL}/get_all_users`,
            method: 'GET',
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default getAllUsers;
