import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import login from "../api/auth/login";
import Header from "../components/header/Header";
import Loading from "../components/Loading";

const LoginPage = () => {
    const location = useLocation();
    const message = location.state?.message;

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await login(username, password);
            navigate('/');
        } catch (error) {
            if (error.response.status === 401) {
                setErrorMessage(error.response.data);
            } else {
                console.error(error);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div style={{ marginLeft: "auto", marginRight: "auto", width: "500px" }}>
                <form onSubmit={handleSubmit}>
                    <div className="text-center fs-1">login</div>

                    <div className="text-success text-center">{message}</div>
                    <div className="text-danger text-center">{errorMessage}</div>

                    {loading && <Loading />}
                    <input type="text" className="form-control m-2" placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username-input"
                    />

                    <input type="password" className="form-control m-2" placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn btn-dark w-100 m-2" type="submit"
                        disabled={username === '' || password === ''}
                    >
                        submit
                    </button>
                </form>
            </div>
        </>
    )
};

export default LoginPage;
