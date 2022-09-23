import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginBuilder } from "../../managers/AuthManager"

export const Login = ({ setToken, setUserId, setStaffBool }) => {
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const [isUnsuccessful, setIsUnsuccessful] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()

        const user = {
            username: username.current.value,
            password: password.current.value
        }

        loginBuilder(user).then(res => {
            if ("valid" in res && res.valid) {

                setToken(res.token)
                setUserId(res.user_id)
                setStaffBool(res.is_staff)
                navigate("/projects")
            }
            else {
                setIsUnsuccessful(true)
            }
        })
    }

    return (
        <section>
            <form onSubmit={handleLogin}>
                <p className="subtitle is-5">Please sign in</p>
                <div>
                    <label>Username</label>
                    <div>
                        <input type="text" ref={username} />
                    </div>
                </div>

                <div>
                    <label>Password</label>
                    <div>
                        <input type="password" ref={password} />
                    </div>
                </div>

                <div>
                    <div>
                        <button className="button has-background-success-dark has-text-white-bis" type="submit" >Submit</button>
                    </div>
                    <div>
                        <Link className="button is-success-dark" to="/register">Cancel</Link>
                    </div>
                </div>
                {
                    isUnsuccessful ? <p>Username or password not valid</p> : ''
                }
            </form>
        </section>
    )
}
