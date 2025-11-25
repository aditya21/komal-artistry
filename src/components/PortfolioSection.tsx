import { Box, Button, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import { portfolioItems } from "../data/content";

interface PortfolioSectionProps {
  limit?: number;
  showCTA?: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ limit = 6, showCTA = true }) => {
  const items = portfolioItems.slice(0, limit);

  return (
    <Box sx={{ my: 6 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexWrap: "wrap", gap: 2 }}>
        <Box>
          <Typography variant="overline" color="secondary.main">
            Portfolio
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", color: "text.primary" }}>
            Featured Transformations
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A glimpse into our signature bridal and occasion looks.
          </Typography>
        </Box>
        {showCTA && (
          <Button component={RouterLink} to="/portfolio" variant="outlined" endIcon={<ArrowForwardIcon />}>
            View All
          </Button>
        )}
      </Box>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                height: "100%",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                backgroundColor: "background.paper",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea component={RouterLink} to="/portfolio">
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ width: "100%", height: 280, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="secondary" gutterBottom>
                    {item.category}
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;

