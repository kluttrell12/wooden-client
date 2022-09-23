import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { ProjectList } from "../components/projects/ProjectList"
import { ProjectForm } from "../components/projects/ProjectForm"

export const BuilderViews = ({ token, setToken, setUserId, setStaffBool }) => {
    return <Routes>
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} setStaffBool={setStaffBool} />} />
        <Route path="/register" element={<Register setToken={setToken} setUserId={setUserId} setStaffBool={setStaffBool} />} />
        <Route element={<Authorized token={token} />}>
            {/* Add Routes here */}
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/create" element={<ProjectForm />} />    

        </Route>
    </Routes>
}