import { Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Register } from "../components/auth/Register"
import { ProjectList } from "../components/projects/ProjectList"
import { CatList } from "../components/categories/CatList"
import { TagList } from "../components/tags/TagList"
import { LumberList } from "../components/lumber/LumberList"
import { BuilderList } from "../components/builders/BuilderList"
import { ProjectForm } from "../components/projects/ProjectForm"
import { EditProject } from "../components/projects/EditProject"
import { AdminEditBuilder } from "../components/builders/AdminEditBuilder"
import { WelcomePage } from "../components/homepage/WelcomePage"

export const AdminViews = () => {
    return <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/register" element={<Register/>} />
        <Route element={<Authorized/>}>
            {/* ---projects--- */}
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/create" element={<ProjectForm />} />    
            <Route path="/projects/:projectId/edit" element={<EditProject />} />
            {/* ---categories--- */}
            <Route path="/categories" element={<CatList />} />
            {/* ---tags--- */}
            <Route path="/tags" element={<TagList />} />
            {/* ---lumber--- */}
            <Route path="/lumber" element={<LumberList />} />
            {/* ---builders--- */}
            <Route path="/builders" element={<BuilderList />} />
            <Route path="/builders/:builderId/edit" element={<AdminEditBuilder />} />

        </Route>
    </Routes>
}