import axios from "axios";
import { URL } from "./http";

const logout = async () => {
    const response = await axios({
        url: `${URL}/auth/logout`,
        method: 'GET',
        withCredentials: true
    });

    return response.data;
};

export default logout;
