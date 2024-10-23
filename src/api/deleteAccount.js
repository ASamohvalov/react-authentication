import axios from "axios"
import { URL } from "./http"

const deleteAccount = async () => {
    try {
        const response = await axios({
            url: `${URL}/delete_user`,
            method: 'DELETE',
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default deleteAccount;
