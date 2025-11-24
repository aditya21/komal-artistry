import { Avatar, Card, CardContent, Grid, Rating, Stack, Typography, Button } from "@mui/material";
import { testimonials } from "../data/content";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  limit?: number;
  showCTA?: boolean;
}

const TestimonialsSection: React.FC<Props> = ({ limit, showCTA = true }) => {
  const list = typeof limit === "number" ? testimonials.slice(0, limit) : testimonials;

  return (
    <Stack spacing={3} mt={6}>
      <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }}>
        <div>
          <Typography variant="overline" color="secondary.main">Client Love</Typography>
          <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif" }}>Testimonials</Typography>
          <Typography variant="body1" color="text.secondary">2,500+ studio hours, 300+ radiant brides and counting.</Typography>
        </div>
        {showCTA && (
          <Button component={RouterLink} to="/testimonials" variant="outlined">
            Read all reviews
          </Button>
        )}
      </Stack>
      <Grid container spacing={3}>
        {list.map((testimonial) => (
          <Grid item xs={12} md={4} key={testimonial.id}>
            <Card sx={{ height: "100%", border: "1px solid rgba(183,110,121,0.2)", backgroundColor: "background.paper" }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.event}
                    </Typography>
                  </div>
                </Stack>
                <Rating value={testimonial.rating} precision={0.5} readOnly sx={{ mb: 1 }} />
                <Typography variant="body2">“{testimonial.review}”</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default TestimonialsSection;
