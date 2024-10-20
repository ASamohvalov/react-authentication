import axios from "axios";
import { URL } from "../http.js";

const register = async (username, password, firstName, lastName) => {
    const response = await axios({
        url: `${URL}/auth/register`,
        method: 'POST',
        data: {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
    });

    return response.data;
};

export default register;
