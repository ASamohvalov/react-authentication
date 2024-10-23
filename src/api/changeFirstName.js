import axios from "axios";
import { URL } from "./http";

const changeFirstName = async (firstName) => {
    try {
        await axios({
            url: `${URL}/change_first_name`,
            method: 'PATCH',
            data: { firstName: firstName },
            withCredentials: true
        });

    } catch (error) {
        console.log(error);
    }
};

export default changeFirstName;
