import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { quickLinks } from "../data/content";

const QuickBookingStrip = () => (
  <Paper
    elevation={0}
    sx={{
      mt: 6,
      p: { xs: 3, md: 4 },
      borderRadius: 4,
      border: "1px solid rgba(212,175,55,0.4)",
      background: "linear-gradient(90deg, rgba(212,175,55,0.08), rgba(183,110,121,0.08))",
    }}
  >
    <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center" justifyContent="space-between">
      <Box>
        <Typography variant="overline" color="primary">Quick Booking</Typography>
        <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
          Need glam on the go? Reach out instantly.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quickLinks.locationLabel}
        </Typography>
      </Box>
      <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} width={{ xs: "100%", md: "auto" }}>
        <Button startIcon={<LocalPhoneIcon />} component="a" href={`tel:${quickLinks.phone}`} variant="contained" color="primary">
          Call
        </Button>
        <Button startIcon={<WhatsAppIcon />} component="a" href={quickLinks.whatsapp} target="_blank" rel="noreferrer" variant="outlined" color="secondary">
          WhatsApp
        </Button>
        <Button startIcon={<InstagramIcon />} component="a" href={quickLinks.instagram} target="_blank" rel="noreferrer" variant="contained" color="secondary">
          Instagram
        </Button>
        <Button startIcon={<LocationOnIcon />} component="a" href="https://maps.google.com?q=Komal+Artistry+Pune" target="_blank" rel="noreferrer" variant="outlined">
          Location
        </Button>
      </Stack>
    </Stack>
  </Paper>
);

export default QuickBookingStrip;
