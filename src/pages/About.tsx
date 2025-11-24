import { Avatar, Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";

const stats = [
  { label: "Brides glammed", value: "300+" },
  { label: "Years of artistry", value: "9" },
  { label: "Cities traveled", value: "15" },
];

const About = () => (
  <Box>
    <Typography variant="overline" color="secondary.main">About Komal</Typography>
    <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif" }} gutterBottom>
      Luxury bridal artist with a human touch
    </Typography>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={5}>
        <Paper sx={{ p: 4, borderRadius: 4, textAlign: "center" }}>
          <Avatar
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
            alt="Komal at work"
            sx={{ width: 220, height: 220, mx: "auto", mb: 2 }}
          />
          <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif" }}>
            Komal Harshey
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lead Makeup Artist • Founder
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
            <Chip label="Certified in HD & Airbrush" color="secondary" variant="outlined" />
            <Chip label="MAC Pro | Anastasia Beverly Hills" variant="outlined" />
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography variant="body1" color="text.secondary" paragraph>
          Komal started Komal Artistry after years of backstage experience with fashion weeks and celebrity stylists. Her craft blends
          editorial techniques with skin-first rituals so every bride looks radiant from pheras to after-parties.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Today she leads a boutique team that caters to premium bridal, photoshoot and influencer clients across Pune, Goa, Udaipur and
          Dubai. Expect punctuality, curated kits, mindfulness and an artist who listens.
        </Typography>
        <Grid container spacing={2} mt={1}>
          {stats.map((stat) => (
            <Grid item xs={4} key={stat.label}>
              <Typography variant="h4" color="primary.main" sx={{ fontFamily: "Playfair Display, serif" }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default About;
