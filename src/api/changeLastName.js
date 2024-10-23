import axios from "axios"
import { URL } from "./http"

const changeLastName = async (lastName) => {
    try {
        await axios({
            url: `${URL}/change_last_name`,
            method: 'PATCH',
            data: { lastName: lastName },
            withCredentials: true
        });

    } catch (error) {
        console.log(error);
    }
};

export default changeLastName;
