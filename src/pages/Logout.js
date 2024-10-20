import { useEffect } from "react";
import logout from "../api/logout";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await logout();
                navigate('/login', { state: { message: response } });
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, [navigate]);
    
    return null;
};

export default Logout;
