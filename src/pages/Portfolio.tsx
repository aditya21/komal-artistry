import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { portfolioItems, PortfolioItem } from "../data/content";

const categories = ["All", "Bridal", "Party", "Haldi", "Photoshoot", "BeforeAfter"] as const;

const Portfolio: React.FC = () => {
  const [filter, setFilter] = React.useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = React.useState<PortfolioItem | null>(null);

  const filtered =
    filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter || (filter === "BeforeAfter" && item.category === "BeforeAfter"));

  return (
    <Box>
      <Typography variant="overline" color="secondary.main">Portfolio</Typography>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif" }} gutterBottom>
        Bridal Transformations
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        A collection of timeless bridal moments captured across pheras, receptions, haldi rituals and editorial shoots.
      </Typography>
      <ToggleButtonGroup
        exclusive
        value={filter}
        onChange={(_, value) => value && setFilter(value)}
        sx={{ flexWrap: "wrap", gap: 1, mb: 4 }}
      >
        {categories.map((category) => (
          <ToggleButton key={category} value={category} sx={{ borderRadius: 999, px: 3 }}>
            {category}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Grid container spacing={3}>
        {filtered.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ border: "1px solid rgba(212,175,55,0.2)", backgroundColor: "background.paper" }}>
              <CardActionArea onClick={() => setSelected(item)}>
                <Box component="img" src={item.image} alt={item.title} sx={{ width: "100%", height: 280, objectFit: "cover" }} />
                <CardContent>
                  <Typography variant="subtitle2" color="secondary" gutterBottom>
                    {item.category}
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} maxWidth="md" fullWidth>
        {selected && (
          <>
            <DialogTitle>{selected.title}</DialogTitle>
            <DialogContent>
              <Box component="img" src={selected.image} alt={selected.title} sx={{ width: "100%", borderRadius: 2, mb: 2 }} />
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {selected.description}
              </Typography>
              <Typography variant="body2">Products used: {selected.products}</Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Portfolio;
