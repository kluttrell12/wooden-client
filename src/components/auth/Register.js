import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { registerBuilder } from "../../managers/AuthManager"

export const Register = ({ setToken, setUserId, setStaffBool }) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const username = useRef()
    const bio = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                username: username.current.value,
                first_name: firstName.current.value,
                last_name: lastName.current.value,
                email: email.current.value,
                password: password.current.value,
                bio: bio.current.value
            }

            registerBuilder(newUser)
                .then(res => {
                    if ("valid" in res && res.valid) {
                        setToken(res.token)
                        setUserId(res.user_id)
                        setStaffBool(res.is_staff)
                        navigate("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <section>
            <form onSubmit={handleRegister}>
                <h1>Wooden</h1>
                <p>Create an account</p>
                <div>
                    <label>First Name</label>
                    <div>
                        <input type="text" ref={firstName} />
                    </div>
                </div>

                <div>
                    <label>Last Name</label>
                    <div>
                        <input type="text" ref={lastName} />
                    </div>
                </div>

                <div>
                    <label>Username</label>
                    <div>
                        <input type="text" ref={username} />
                    </div>
                </div>

                <div>
                    <label>Email</label>
                    <div>
                        <input type="email" ref={email} />
                    </div>
                </div>

                <div>
                    <label>Password</label>
                    <div>
                        <div>
                            <p>
                                <input type="password" placeholder="Password" ref={password} />
                            </p>
                        </div>

                        <div>
                            <p>
                                <input type="password" placeholder="Verify Password" ref={verifyPassword} />
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <label>Bio</label>
                    <div>
                        <textarea placeholder="Tell us about yourself..." ref={bio}></textarea>
                    </div>
                </div>

                <div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    <div>
                        <Link to="/login">Cancel</Link>
                    </div>
                </div>

            </form>
        </section>
    )
}
