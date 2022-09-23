import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "./woodenlogo.jpg"

export const BuilderNavBar = ({ token, setToken }) => {
    const navigate = useNavigate()
    const navbar = useRef()
    const hamburger = useRef()

    const showMobileNavbar = () => {
        hamburger.current.classList.toggle('is-active')
        navbar.current.classList.toggle('is-active')
    }

    return (
        <nav className="navbar has-background-white" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <img src={Logo} height ="3rem" /> <h1 className="title has-text-success-dark">Wooden</h1>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={showMobileNavbar} href={hamburger}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu" ref={navbar}>
                <div className="navbar-start">
                    {
                        token
                            ? <>
                                <Link to="/projects" className="navbar-item has-text-success-dark">Projects</Link>
                                <Link to="/projects/create" className="navbar-item has-text-success-dark">Add a Project</Link>
                            </>
                            :
                            ""
                    }
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {
                                token
                                    ? <>
                                        <button className="button is-outlined has-text-success-dark" onClick={() => {
                                            setToken('')
                                            navigate('/login')
                                        }}>Logout</button>
                                    </>
                                    :
                                    <>
                                        <Link to="/register" className="button has-background-success-dark has-text-white-bis">Register</Link>
                                        <Link to="/login" className="button is-outlined">Login</Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
