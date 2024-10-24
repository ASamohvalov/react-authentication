import { useNavigate } from "react-router-dom";
import me from "../api/me";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import deleteAccount from "../api/deleteAccount";
import EditProfile from "../components/EditProfile";

const UserPage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [editProfile, setEditProfile] = useState(false);

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

    const handleDeleteProfile = async (e) => {
        e.preventDefault();

        const confirmDelete = window.confirm("Are you sure you want to delete your profile? This action cannot be undone.");
        if (confirmDelete) {
            const response = await deleteAccount();
            navigate('/login', { state: { message: response } });
        }
    };

    return (
        <>
            <Header />
            <div className="p-3">
                <h1>{userData?.username}</h1>
                <p>Имя: {userData?.firstName}</p>
                <p>Фамилия: {userData?.lastName}</p>
                <p>Роли: {userData?.roles.join(', ')}</p>

                <button className="btn btn-danger m-3" onClick={handleDeleteProfile}>delete your profile</button>
                <br />
                <button className="btn btn-primary m-3" onClick={() => setEditProfile(!editProfile)}>edit profile</button>
                { editProfile && <EditProfile /> }
            </div>
        </>
    );
};

export default UserPage;
