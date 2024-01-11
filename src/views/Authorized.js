import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../components/auth/authProvider"

export const Authorized = () => {
    const {token} = useContext(AuthContext)
    if (token) {
        return <Outlet />
    }
    return <Navigate to='/' replace />
}