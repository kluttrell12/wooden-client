import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import WoodenTheme from "../../themes/WoodenTheme";

const theme = WoodenTheme

export const EditDeleteButtons = ({ onEdit, onDelete, projectId }) => (
    <Stack direction="row" spacing={1}>
      <IconButton
        aria-label="edit"
        color="primary"
        onClick={() => onEdit(projectId)}
      >
        <Edit sx={{color: theme.palette.primary.main}} />
      </IconButton>
      <IconButton
        aria-label="delete"
        color="secondary"
        onClick={() => onDelete(projectId)}
      >
        <Delete sx={{ color: theme.palette.delete.main}} />
      </IconButton>
    </Stack>
  );