import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProject, getAllProjects } from "../../managers/ProjectManager";
import { Box } from "@mui/material";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  let navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  const loadProjects = () => {
    getAllProjects().then((data) => setProjects(data));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const deleteClickEvent = (projectId) => {
    deleteProject(projectId).then(loadProjects);
  };

  return (
    <Box sx={{ width: "100%", display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', mt: 2, }}>
        {projects.map((project) => (
          <Box key={project.id} gap={2}>
            <ProjectCard
              project={project}
              onEdit={(id) => navigate(`/projects/${id}/edit`)}
              onDelete={deleteClickEvent}
            />
          </Box>
        ))}
    </Box>
  );
};
