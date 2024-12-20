import { useState } from "react";
import register from "../../api/auth/register";
import './auth.css';
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Loading from "../../components/Loading";

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (confirmPassword !== password) {
            document.getElementById('password-input').classList.add('is-invalid');
            document.getElementById('password-confirm-input').classList.add('is-invalid');
            document.getElementById('password-error-msg').textContent = 'passwords do not match';
            return;
        }

        try {
            setLoading(true);
            const response = await register(username, password, firstName, lastName);
            navigate('/login', { state: { message: response } });
        } catch (error) {
            if (error.response.status === 400) {
                document.getElementById('username-error-msg').textContent = error.response.data;
                document.getElementById('username-input').classList.add('is-invalid');
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
                    <div className="text-center fs-1">register</div>

                    {loading && <Loading />}
                    <input type="text" className="form-control m-2" placeholder="first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <input type="text" className="form-control m-2" placeholder="last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <input type="text" className="form-control m-2" placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="username-input"
                    />
                    <div className="mx-3 text-danger" id="username-error-msg" />

                    <input type="password" className="form-control m-2" placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password-input"
                    />
                    <div className="mx-3 text-danger" id="password-error-msg" />

                    <input type="password" className="form-control m-2" placeholder="confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        id="password-confirm-input"
                    />

                    <button className="btn btn-dark w-100 m-2" type="submit"
                        disabled={firstName === '' || lastName === '' || username === '' || password === '' || confirmPassword === ''}
                    >submit</button>
                </form>
            </div>
        </>
    );
};

export default RegisterPage;
