import axios from "axios";
import { URL } from "./http";

const isAuthenticated = async () => {
    try {
        await axios({
            url: `${URL}/auth/is-authenticated`,
            method: 'GET',
            withCredentials: true
        });
        return true;
    } catch (error) {
        return false;
    }
};

export default isAuthenticated;
