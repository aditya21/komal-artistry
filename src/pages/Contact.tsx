import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import { quickLinks } from "../data/content";

const EventTypes = ["Bridal", "Party", "Shoot", "Other"] as const;

const Contact = () => (
  <Box>
    <Typography variant="overline" color="secondary.main">Contact & Booking</Typography>
    <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif" }} gutterBottom>
      Let's plan your glam timeline
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={7}>
        <Paper sx={{ p: 4, borderRadius: 4 }}>
          <Stack spacing={2} component="form">
            <TextField label="Full Name" fullWidth required />
            <TextField label="Phone / WhatsApp" fullWidth required />
            <TextField select label="Event Type" fullWidth defaultValue={EventTypes[0]}>
              {EventTypes.map((type) => (
                <MenuItem value={type} key={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField label="Event Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
            <TextField label="City / Venue" fullWidth />
            <TextField label="Tell us about your look + outfit" multiline rows={4} fullWidth />
            <Button variant="contained" color="primary" size="large">
              Submit enquiry
            </Button>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Stack spacing={3}>
          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif" }} gutterBottom>
              Studio & Hotline
            </Typography>
            <Stack spacing={1}>
              <Typography>{quickLinks.phone}</Typography>
              <Typography color="text.secondary">{quickLinks.locationLabel}</Typography>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} mt={3}>
              <Button startIcon={<WhatsAppIcon />} href={quickLinks.whatsapp} target="_blank" rel="noreferrer" variant="contained">
                WhatsApp
              </Button>
              <Button startIcon={<InstagramIcon />} href={quickLinks.instagram} target="_blank" rel="noreferrer" variant="outlined">
                Instagram
              </Button>
            </Stack>
          </Paper>
          <Paper sx={{ p: 1.5, borderRadius: 4, overflow: "hidden" }}>
            <Box
              component="iframe"
              title="Studio location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.270353945813!2d73.90344957519341!3d18.561558568721054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1320e7d0905%3A0x784b1c3c2de3c8a7!2sKalyani%20Nagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Paper>
          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <RoomIcon color="primary" />
              <Typography variant="body2" color="text.secondary">
                Appointments by prior booking only. Travel-friendly kit for destination weddings.
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

export default Contact;
