import {
  Box,
  Chip,
  Stack,
} from "@mui/material";
import WoodenTheme from "../../themes/WoodenTheme";

const theme = WoodenTheme
export const TagsChips = ({ tags, categories, lumber }) => (
    <Stack direction="row" spacing={1}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {tags?.map(({ id, label }) => (
          <Chip
            sx={{ display: "flex", flexDirection: "column", bgColor: theme.palette.secondary.main }}
            key={id}
            label={label}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {categories?.map(({ id, type }) => (
          <Chip sx={{backgroundColor: theme.palette.edit.main}} key={id} label={type} />
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {lumber?.map(({ id, type }) => (
          <Chip key={id} label={type} sx={{ backgroundColor: theme.palette.primary.main, color: theme.palette.common.white}} />
        ))}
      </Box>
    </Stack>
  );