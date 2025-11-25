import { Box, Container, Paper, Stack, Typography, Link, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

// Vite handles image imports directly as URL strings
import komalImage from "../assets/komal.png";
import heroImage from "../assets/hero.jpeg";

const HeroSection = () => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      minHeight: { xs: "80vh", md: "90vh" },
      borderRadius: { xs: 0, md: 5 },
      overflow: "hidden",
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      py: { xs: 4, md: 6 },
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(90deg, rgba(255, 182, 193, 0.5) 0%, rgba(221, 160, 221, 0.5) 50%, rgba(176, 224, 230, 0.5) 100%)",
        zIndex: 0,
      },
    }}
  >
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "center" },
        justifyContent: { xs: "center", md: "flex-start" },
        gap: { xs: 4, md: 6 },
        minHeight: { xs: "80vh", md: "90vh" },
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Content with Portrait and Text */}
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          borderRadius: 4,
          p: { xs: 3, md: 5 },
          border: "1px solid rgba(255, 255, 255, 0.3)",
          width: "fit-content",
          maxWidth: { xs: "100%", md: "90%" },
          mx: { xs: "auto", md: 0 },
          ml: { xs: "auto", md: 0 },
        }}
      >
        {/* Circular Portrait on Left */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: 200, md: 300 },
            height: { xs: 200, md: 300 },
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid rgba(255, 255, 255, 0.9)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          }}
        >
          <Box
            component="img"
            src={komalImage}
            alt="Komal Artistry"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Content on Right */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          {/* Business Name */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            color: "#6B2C91",
            mb: 3,
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          KOMAL ARTISTRY
        </Typography>

        {/* Services Box */}
        <Paper
          elevation={0}
          sx={{
            display: "inline-block",
            border: "2px solid rgba(107, 44, 145, 0.3)",
            borderRadius: 2,
            px: { xs: 2, md: 4 },
            py: { xs: 1.5, md: 2 },
            mb: 4,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              color: "#6B2C91",
              fontSize: { xs: "0.875rem", md: "1rem" },
              letterSpacing: 1,
            }}
          >
            MAKE-UP | HAIR STYLE | STYLING
          </Typography>
        </Paper>

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 3 }}
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="center"
          sx={{ mt: 4 }}
        >
          <Button
            component={RouterLink}
            to="/portfolio"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#6B2C91",
              color: "white",
              px: { xs: 4, md: 5 },
              py: { xs: 1.5, md: 2 },
              borderRadius: 2,
              fontWeight: 600,
              fontSize: { xs: "0.875rem", md: "1rem" },
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#5a2477",
              },
            }}
          >
            View Portfolio
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            size="large"
            sx={{
              borderColor: "#6B2C91",
              color: "#6B2C91",
              px: { xs: 4, md: 5 },
              py: { xs: 1.5, md: 2 },
              borderRadius: 2,
              fontWeight: 600,
              fontSize: { xs: "0.875rem", md: "1rem" },
              textTransform: "none",
              "&:hover": {
                borderColor: "#5a2477",
                backgroundColor: "rgba(107, 44, 145, 0.08)",
              },
            }}
          >
            Book Now
          </Button>
        </Stack>
        </Box>
      </Paper>
    </Container>
  </Box>
);

export default HeroSection;
