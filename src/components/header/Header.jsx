import { useEffect, useState } from "react";
import isAuthenticated from "../../api/isAuthenticated";

const Header = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const result = await isAuthenticated();
            setAuth(result); 
        };
        checkAuth();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                    auth ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/">main</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">register</a>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    );
};

export default Header;
