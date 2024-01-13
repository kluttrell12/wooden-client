import WoodenTheme from "../../themes/WoodenTheme";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Stack,
  } from "@mui/material";
  import { EditDeleteButtons } from "../buttons/EditDeleteButtons";
import { TagsChips } from "../chips/TagsChips";

const theme = WoodenTheme
export const ProjectCard = ({
  project: {
    id,
    title,
    image_url,
    description,
    cost,
    builder,
    tags,
    categories,
    lumber,
  },
  onEdit,
  onDelete,
}) => {
  return (
    <Card sx={{ mb: 2, width: 350, height: 500, position: 'relative' }}>
      <Stack direction="column" display={'flex'} justifyContent={'center'} spacing={2}>
        <CardMedia
          component="img"
          sx={{
            width: 300,
            height: 200,
            objectFit: "contain",
            objectPosition: "center",
          }}
          image={image_url}
          alt={title}
        />

        <CardContent>
          <Typography variant="h5" color={theme.palette.primary.alternate}>
            {title}
          </Typography>
          <Typography variant="subtitle1">{description}</Typography>
          <Typography variant="subtitle2">Project Cost: ${cost}</Typography>
          <Typography variant="subtitle2">
            Built by @{builder?.user?.username}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              maxWidth: 200,
            }}
          >
            <TagsChips tags={tags} categories={categories} lumber={lumber} />
          </Box>
          {localStorage.getItem("user_id") == builder?.user?.id && (
            <Box sx={{position: 'absolute', top: 8, right: 8}}>
              <EditDeleteButtons
                onEdit={onEdit}
                onDelete={onDelete}
                projectId={id}
              />
            </Box>
          )}
        </CardContent>
      </Stack>
    </Card>
  );
};



