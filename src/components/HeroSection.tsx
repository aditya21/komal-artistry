import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { heroImages } from "../data/content";
import { Link as RouterLink } from "react-router-dom";

const collageImages = [
  heroImages[0],
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  heroImages[1],
  "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=900&q=80",
  heroImages[2],
];

const HeroSection: React.FC = () => (
  <Box
    sx={{
      width: "100%",
      py: { xs: 6, md: 10 },
      background: "radial-gradient(circle at top right, rgba(212,175,55,0.15), transparent 55%), #FFF7F3",
    }}
  >
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="stretch">
        <Grid item xs={12} md={6} display="flex" alignItems="center">
          <Box>
            <Typography variant="h2" sx={{ fontFamily: "Playfair Display, serif", mb: 1 }}>
              Luxury Bridal & Occasion Makeovers
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
              For your once-in-a-lifetime moments.
            </Typography>
            <Stack spacing={1.2} mb={4}>
              <Typography variant="body1" color="text.secondary">
                • Pune | Mumbai | Nagpur
              </Typography>
              <Typography variant="body1" color="text.secondary">
                • Bridal, Engagement, Party & Photoshoot looks
              </Typography>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/portfolio"
                endIcon={<ArrowForwardIcon />}
              >
                View Portfolio
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                component={RouterLink}
                to="/contact"
                endIcon={<ArrowForwardIcon />}
              >
                Book Appointment
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gridAutoRows: { xs: "160px", md: "190px" },
              gap: 2,
              height: "100%",
            }}
          >
            {collageImages.map((image, index) => (
              <Box
                component="img"
                key={image}
                src={image}
                alt="Bridal look"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 4,
                  boxShadow: 3,
                  gridColumn: index === 0 ? "span 2" : "auto",
                  gridRow: index === 0 ? "span 2" : "auto",
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default HeroSection;
