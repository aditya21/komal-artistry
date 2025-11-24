import { Box, Typography } from "@mui/material";
import TestimonialsSection from "../components/TestimonialsSection";

const Testimonials = () => (
  <Box>
    <Typography variant="overline" color="secondary.main">Testimonials</Typography>
    <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif" }} gutterBottom>
      Brides who trusted Komal Artistry
    </Typography>
    <Typography variant="body1" color="text.secondary" mb={3}>
      From sunrise haldi rituals to ballroom receptions, here’s what the glam squad’s clients say.
    </Typography>
    <TestimonialsSection showCTA={false} />
  </Box>
);

export default Testimonials;
