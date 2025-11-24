import { Box, Card, CardContent, Stack, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import { portfolioItems } from "../data/content";

const featured = portfolioItems.slice(0, 4);

const FeaturedLooksCarousel: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % featured.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const current = featured[index];

  return (
    <Card sx={{ mt: 6, border: "1px solid rgba(183, 110, 121, 0.3)", background: "linear-gradient(120deg, rgba(255,247,243,0.8), rgba(247,217,197,0.9))" }}>
      <CardContent>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
          <Box
            component="img"
            src={current.image}
            alt={current.title}
            sx={{ width: { xs: "100%", md: "50%" }, borderRadius: 4, boxShadow: 3, objectFit: "cover" }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="overline" color="secondary">Featured Looks</Typography>
            <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}>
              {current.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1.5}>
              {current.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Favorite products: {current.products}
            </Typography>
            <Stack direction="row" spacing={1.5} mt={3}>
              <IconButton onClick={() => setIndex((prev) => (prev - 1 + featured.length) % featured.length)}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton onClick={() => setIndex((prev) => (prev + 1) % featured.length)}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FeaturedLooksCarousel;
