import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import { type SxProps, type Theme } from "@mui/material/styles";
import Grid from "@mui/material/GridLegacy";
import React from "react";

// Import images
import heroImage from "../assets/hero.jpeg";
import p1Image from "../assets/p1.jpeg";
import p2Image from "../assets/p2.jpeg";
import p3Image from "../assets/p3.jpeg";
import p5Image from "../assets/p5.jpeg";

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const topImages = [
    { src: heroImage, alt: "Bridal Makeup 1" },
    { src: p1Image, alt: "Bridal Makeup 2" },
  ];

  const bottomImages = [
    { src: p2Image, alt: "Bridal Makeup 3" },
    { src: p3Image, alt: "Bridal Makeup 4" },
    { src: p5Image, alt: "Bridal Makeup 5" },
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const cardStyles: SxProps<Theme> = {
    position: "relative",
    width: "100%",
    borderRadius: 4,
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    },
  };

  const imageStyles: SxProps<Theme> = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    backgroundColor: "transparent",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 1, md: 1 },
          px: { xs: 2, md: 4 },
          pt: { xs: 2, md: 2 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            color: "#6B2C91",
            mb: 0.5,
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2rem" },
            lineHeight: 1.2,
          }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={{ xs: 1, md: 1.5 }}
          textAlign="center"
          sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" }, lineHeight: 1.2 }}
        >
          A collection of timeless bridal moments
        </Typography>
      </Container>

      {/* Images Section */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 3 },
          pb: { xs: 4, md: 6 },
        }}
      >
        {/* Top Two Large Images - Full Width */}
        <Box sx={{ width: "100%", flex: "0 0 auto" }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {topImages.map((image, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
              >
                <Box
                  onClick={() => handleImageClick(image.src)}
                  sx={{
                    ...cardStyles,
                    height: { xs: "auto", md: 340 },
                  }}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={[
                      imageStyles,
                      {
                        height: { xs: "auto", md: "100%" },
                      },
                    ]}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Bottom Three Images */}
        <Container
          maxWidth="xl"
          sx={{
            py: 0,
            px: { xs: 2, md: 4 },
            flex: "0 0 auto",
          }}
        >
          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {bottomImages.map((image, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <Box
                  onClick={() => handleImageClick(image.src)}
                  sx={{
                    ...cardStyles,
                    height: { xs: "auto", md: 280 },
                  }}
                >
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={[
                      imageStyles,
                      {
                        height: { xs: "auto", md: "100%" },
                      },
                    ]}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Modal for Full Size Image */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          {selectedImage && (
            <Box
              onClick={handleCloseModal}
              sx={{
                cursor: "pointer",
                position: "relative",
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={selectedImage}
                alt="Full size portfolio image"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Portfolio;
