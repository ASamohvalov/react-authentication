import axios from "axios";
import { URL } from "../http";

const login = async (username, password) => {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    const response = await axios({
        url: `${URL}/auth/login`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: params,
        withCredentials: true
    });

    return response.data;
};

export default login;
