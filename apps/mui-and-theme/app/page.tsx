"use client";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function Page() {
  return (
    <Box display="flex" flexDirection="column" gap={10} maxWidth={200}>
      <Button>Hello world</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="partyBanner">Party Banner</Button>
      <Button variant="google">Google</Button>
    </Box>
  );
}
