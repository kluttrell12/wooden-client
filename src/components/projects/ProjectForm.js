import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../managers/CategoryManger";
import { getAllLumber } from "../../managers/LumberManager";
import { createProject } from "../../managers/ProjectManager";
import { getAllTags } from "../../managers/TagManger";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Box,
  Typography,
} from "@mui/material";
import WoodenTheme from "../../themes/WoodenTheme";

const theme = WoodenTheme;

export const ProjectForm = () => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [lumber, setLumber] = useState([]);
  const [project, setProject] = useState({});
  const [projectTags, setProjectTags] = useState([]);
  const [projectCategories, setProjectCategories] = useState([]);
  const [projectLumber, setProjectLumber] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
    getAllTags().then((data) => setTags(data));
    getAllLumber().then((data) => setLumber(data));
  }, []);

  const updateTags = (tagId) => {
    let tagsCopy = [...projectTags];
    const index = tagsCopy.indexOf(tagId);
    if (index < 0) {
      tagsCopy.push(tagId);
    } else {
      tagsCopy.splice(index, 1);
    }
    setProjectTags(tagsCopy);
  };

  const updateCategories = (categoryId) => {
    let categoriesCopy = [...projectCategories];
    const index = categoriesCopy.indexOf(categoryId);
    if (index < 0) {
      categoriesCopy.push(categoryId);
    } else {
      categoriesCopy.splice(index, 1);
    }
    setProjectCategories(categoriesCopy);
  };

  const updateLumber = (lumberId) => {
    let lumberCopy = [...projectLumber];
    const index = lumberCopy.indexOf(lumberId);
    if (index < 0) {
      lumberCopy.push(lumberId);
    } else {
      lumberCopy.splice(index, 1);
    }
    setProjectLumber(lumberCopy);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit successful");

    const projectData = {
      ...project,
      tags: projectTags,
      categories: projectCategories,
      lumber: projectLumber,
    };

    createProject(projectData).then(() => {
      navigate("/projects");
    });
  };

  const handleChange = (event) => {
    const newProject = { ...project };
    newProject[event.target.name] = event.target.value;
    setProject(newProject);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "66%", fontFamily: theme.typography.fontFamily.main }}
      >
        <Typography
          sx={{
            fontFamily: theme.typography.fontFamily.main,
            fontSize: theme.typography.fontSizes.xxLarge,
            color: theme.palette.primary.main,
            margin: 2,
          }}
        >
          Add Project
        </Typography>

        <TextField
          required
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          name="title"
          value={project.title}
          onChange={handleChange}
        />

        <TextField
          required
          label="Description"
          multiline
          fullWidth
          margin="normal"
          name="description"
          value={project.description}
          onChange={handleChange}
        />
        {/*TODO: change prop type from string to node and refactor to allow images from user's desktop */}
        <TextField
          required
          label="Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
          name="image_url"
          value={project.image_url}
          onChange={handleChange}
        />

        <TextField
          required
          label="Start Date"
          type="date"
          fullWidth
          margin="normal"
          name="date_started"
          InputLabelProps={{ shrink: true }}
          value={project.date_started}
          onChange={handleChange}
        />

        <TextField
          required
          label="Finish Date"
          type="date"
          fullWidth
          margin="normal"
          name="date_completed"
          InputLabelProps={{ shrink: true }}
          value={project.date_completed}
          onChange={handleChange}
        />

        <TextField
          required
          label="Cost"
          variant="outlined"
          fullWidth
          margin="normal"
          name="cost"
          value={project.cost}
          onChange={handleChange}
        />
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          mt={3}
          fontFamily={theme.typography.fontFamily.main}
        >
          <FormGroup>
            <FormLabel>Lumber</FormLabel>
            {lumber.map(({ id, type }) => (
              <FormControlLabel
                key={id}
                control={
                  <Checkbox
                    checked={projectLumber.includes(id)}
                    onChange={() => updateLumber(id)}
                  />
                }
                label={type}
              />
            ))}
          </FormGroup>

          <FormGroup>
            <FormLabel>Tags</FormLabel>
            {tags.map(({ id, label }) => (
              <FormControlLabel
                key={id}
                control={
                  <Checkbox
                    checked={projectTags.includes(id)}
                    onChange={() => updateTags(id)}
                  />
                }
                label={label}
              />
            ))}
          </FormGroup>

          <FormGroup>
            <FormLabel>Categories</FormLabel>
            {categories.map(({ id, type }) => (
              <FormControlLabel
                key={id}
                control={
                  <Checkbox
                    checked={projectCategories.includes(id)}
                    onChange={() => updateCategories(id)}
                  />
                }
                label={type}
              />
            ))}
          </FormGroup>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};
