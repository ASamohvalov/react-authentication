import axios from "axios";
import { URL } from "./http";

const me = async () => {
    const response = await axios({
        url: `${URL}/me`,
        method: 'GET',
        withCredentials: true
    });

    return response.data;
};

export default me;
