import { Box, Paper, Slider, Stack, Typography } from "@mui/material";
import React from "react";

const BeforeAfterSection: React.FC = () => {
  const [value, setValue] = React.useState(50);

  return (
    <Paper
      sx={{
        mt: 6,
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        backgroundColor: "#fff",
        border: "1px solid rgba(27,18,12,0.08)",
      }}
    >
      <Typography variant="overline" color="secondary" gutterBottom>
        Transformation highlight
      </Typography>
      <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}>
        Subtle to Stunning – See the Transformation
      </Typography>
      <Paper sx={{ position: "relative", overflow: "hidden", borderRadius: 4, height: { xs: 300, md: 420 }, mb: 3 }}>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
          alt="After glam"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80"
          alt="Before glam"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${value}%`,
            height: "100%",
            objectFit: "cover",
            borderRight: "2px solid #D4AF37",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: `${value}%`,
            transform: "translateX(-50%)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <Box sx={{ width: 2, height: "60%", backgroundColor: "#D4AF37" }} />
        </Box>
      </Paper>
      <Stack spacing={1}>
        <Typography variant="body2" color="text.secondary">
          Drag the slider to compare skin-prep and final glam.
        </Typography>
        <Slider value={value} onChange={(_, newValue) => setValue(newValue as number)} aria-label="Before after slider" />
      </Stack>
    </Paper>
  );
};

export default BeforeAfterSection;
