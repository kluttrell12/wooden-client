import { AdminNavBar } from "./AdminNavBar"
import { BuilderNavBar } from "./BuilderNavBar"

export const NavBar = ({ token, setToken }) => {

    const localUserStaffBool = localStorage.getItem("is_staff")

    if (localUserStaffBool === "true") {
        return <AdminNavBar token={token} setToken={setToken} />
    } else {
        return <BuilderNavBar token={token} setToken={setToken} />
    }
}