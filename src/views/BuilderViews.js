import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Register } from "../components/auth/Register"
import { ProjectList } from "../components/projects/ProjectList"
import { ProjectForm } from "../components/projects/ProjectForm"
import { WelcomePage } from "../components/homepage/WelcomePage"

export const BuilderViews = () => {

    return <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/register" element={<Register/>} />
        <Route element={<Authorized/>}>
            {/* Add Routes here */}
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/create" element={<ProjectForm />} />    

        </Route>
    </Routes>
}