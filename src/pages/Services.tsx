import { Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import ServicesSection from "../components/ServicesSection";
import { addOns } from "../data/content";

const Services = () => (
  <Box>
    <Typography variant="overline" color="secondary.main">Services & Pricing</Typography>
    <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif" }} gutterBottom>
      Our Signature Packages
    </Typography>
    <Typography variant="body1" color="text.secondary" mb={4}>
      Transparent inclusions, premium artistry and white-glove service. Travel & outstation charges are quoted separately.
    </Typography>
    <ServicesSection showCTA={false} />
    <Paper sx={{ mt: 4, p: 3, borderRadius: 4, border: "1px solid rgba(183,110,121,0.3)" }}>
      <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}>
        Add-ons
      </Typography>
      <Grid container spacing={1}>
        {addOns.map((addon) => (
          <Grid item key={addon}>
            <Chip label={addon} color="secondary" variant="outlined" />
          </Grid>
        ))}
      </Grid>
      <Stack mt={2} spacing={1}>
        <Typography variant="body2">· Trials available on request.</Typography>
        <Typography variant="body2">· Travel & outstation logistics extra.</Typography>
        <Typography variant="body2">· Team bookings for bridesmaids can be arranged.</Typography>
      </Stack>
    </Paper>
  </Box>
);

export default Services;
