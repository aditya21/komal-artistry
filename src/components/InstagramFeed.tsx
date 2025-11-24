import { Box, Grid, Paper, Typography } from "@mui/material";

const instagramImages = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
];

const InstagramFeed = () => (
  <Paper sx={{ mt: 6, p: { xs: 3, md: 4 }, borderRadius: 4 }}>
    <Typography variant="overline" color="primary" gutterBottom>
      Instagram feed
    </Typography>
    <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif", mb: 3 }}>
      Fresh glam on the 'gram
    </Typography>
    <Grid container spacing={2}>
      {instagramImages.map((image, index) => (
        <Grid item xs={6} md={4} key={image + index}>
          <Box
            component="a"
            href="https://www.instagram.com/komalartistry"
            target="_blank"
            rel="noreferrer"
            sx={{
              display: "block",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Box component="img" src={image} alt="instagram glam" sx={{ width: "100%", height: 200, objectFit: "cover" }} />
          </Box>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default InstagramFeed;
