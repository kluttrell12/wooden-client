import { AdminViews } from "./AdminViews"
import { BuilderViews } from "./BuilderViews"

export const ApplicationViews = ({ token, setToken, setUserId, userId, setStaffBool }) => {

    const localUserStaffBool = localStorage.getItem("is_staff")

    if (localUserStaffBool === "true") {
        return <AdminViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} setStaffBool={setStaffBool} />
    } else {
        return <BuilderViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} setStaffBool={setStaffBool} />
    }
}