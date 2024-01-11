import { AdminNavBar } from "./AdminNavBar"
import { BuilderNavBar } from "./BuilderNavBar"

export const NavBar = () => {

    const localUserStaffBool = localStorage.getItem("is_staff")

    return localUserStaffBool ? <AdminNavBar/> : <BuilderNavBar/>;

}