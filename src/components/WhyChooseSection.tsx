import { Card, CardContent, Grid, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const points = [
  {
    title: "Long-lasting makeup",
    description: "Sweat-resistant, photography-friendly bases tested across humid destinations.",
    icon: <WorkspacePremiumIcon color="primary" fontSize="large" />,
  },
  {
    title: "High-quality products",
    description: "Only luxury, skin-loving formulas curated from global brands.",
    icon: <DiamondIcon color="secondary" fontSize="large" />,
  },
  {
    title: "Hygiene & comfort",
    description: "Sanitized tools, mindful prep rituals and gentle touch for brides and families.",
    icon: <FavoriteIcon color="error" fontSize="large" />,
  },
];

const WhyChooseSection = () => (
  <Grid container spacing={3} mt={6}>
    {points.map((point) => (
      <Grid item xs={12} md={4} key={point.title}>
        <Card sx={{ height: "100%", border: "1px solid rgba(27,18,12,0.1)", backgroundColor: "rgba(255,255,255,0.9)" }}>
          <CardContent>
            {point.icon}
            <Typography variant="h5" sx={{ mt: 2, fontFamily: "Playfair Display, serif" }}>
              {point.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {point.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default WhyChooseSection;
