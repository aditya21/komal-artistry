import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { services } from "../data/content";
import { Link as RouterLink } from "react-router-dom";

interface ServicesSectionProps {
  limit?: number;
  showCTA?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ limit, showCTA = true }) => {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <Box sx={{ my: 6 }}>
      <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }} spacing={2} mb={3}>
        <div>
          <Typography variant="overline" color="secondary.main">Our Signature Services</Typography>
          <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", color: "text.primary" }}>
            Luxury looks, tailored rituals
          </Typography>
          <Typography variant="body1" color="text.secondary">
            From pheras to cocktail hour, trust a certified artist who has prepped 300+ brides across Pune, Goa & Mumbai.
          </Typography>
        </div>
        {showCTA && (
          <Button component={RouterLink} to="/services" variant="outlined" endIcon={<ArrowForwardIcon />}>
            View all packages
          </Button>
        )}
      </Stack>
      <Grid container spacing={3}>
        {items.map((service) => (
          <Grid item xs={12} md={6} key={service.title}>
            <Card sx={{ height: "100%", border: "1px solid rgba(212, 175, 55, 0.3)", backgroundColor: "background.paper" }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
                    {service.title}
                  </Typography>
                  <Chip label={service.priceNote} color="secondary" variant="outlined" />
                </Stack>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  {service.description}
                </Typography>
                <Stack spacing={1}>
                  {service.inclusions.map((item) => (
                    <Stack direction="row" spacing={1.5} alignItems="center" key={item}>
                      <CheckIcon fontSize="small" color="primary" />
                      <Typography variant="body2">{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
