import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginBuilder } from '../../managers/AuthManager';

export const Login = ({ setToken, setUserId, setStaffBool }) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };

        loginBuilder(user).then(res => {
            if (res.valid) {
                setToken(res.token);
                setUserId(res.user_id);
                setStaffBool(res.is_staff);
                navigate('/projects');
            } else {
                setErrorMessage('Username or password not valid');
            }
        }).catch(() => {
            setErrorMessage('Login failed due to an unexpected error.');
        });
    };

    return (
        <section>
            <form onSubmit={handleLogin}>
                <p className="subtitle is-5">Please sign in</p>
                <div>
                    <label>Username</label>
                    <input type="text" ref={usernameRef} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" ref={passwordRef} />
                </div>
                <button 
                    className="button has-background-success-dark has-text-white-bis" 
                    type="submit"
                >
                    Submit
                </button>
                <Link className="button is-success-dark" to="/register">Cancel</Link>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </section>
    );
};
