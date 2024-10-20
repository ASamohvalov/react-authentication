import { useNavigate } from "react-router-dom";
import me from "../api/me";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";

const UserPage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await me();
                setUserData(data);
            } catch (error) {
                navigate('/login', { state: { message: 'please log in' } });
            }
        };

        fetchUserData();
    }, [navigate]);

    return (
        <>
            <Header />
            <div className="p-3">
                <h1>{userData?.username}</h1>
                <p>Имя: {userData?.firstName}</p>
                <p>Фамилия: {userData?.lastName}</p>
                <p>Роли: {userData?.roles.join(', ')}</p>
            </div>
        </>
    );
};

export default UserPage;
