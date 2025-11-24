import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import FeaturedLooksCarousel from "../components/FeaturedLooksCarousel";
import WhyChooseSection from "../components/WhyChooseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import QuickBookingStrip from "../components/QuickBookingStrip";
import BeforeAfterSection from "../components/BeforeAfterSection";
import InstagramFeed from "../components/InstagramFeed";
import FAQSection from "../components/FAQSection";

const experienceHighlights = [
  { title: "Look blueprints", description: "Palette cues drawn from outfits, jewellery and venue lighting so every angle feels cohesive." },
  { title: "Concierge communication", description: "Shared WhatsApp boards, outfit fittings support and calm reminders leading up to events." },
  { title: "Destination ready", description: "Travel-friendly kit, hygiene-first setup and assistants for large bridal entourages." },
];

const ritualChecklist = ["Luxury skin prep", "Mindful breathwork", "Hairstyling & draping", "HD/Airbrush tailoring", "Final touch-up kit"];

const Home = () => (
  <Box sx={{ width: "100%", overflow: "hidden" }}>
    <HeroSection />

    <Box sx={{ py: { xs: 6, md: 10 }, background: "linear-gradient(180deg, rgba(255,247,243,0.8), rgba(255,255,255,0.6))" }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Typography variant="overline" color="secondary.main">
              The Luxury Bridal Experience
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}>
              Story-led glam for pheras, receptions & after-parties
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              We obsess over moodboards, lighting plans and skin health so your glam feels effortless from sunrise haldi to midnight cocktails.
            </Typography>
            <Stack spacing={2.5}>
              {experienceHighlights.map((item) => (
                <Paper key={item.title} sx={{ p: 3, borderRadius: 4, border: "1px solid rgba(183,110,121,0.2)", backgroundColor: "background.paper" }}>
                  <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(183,110,121,0.12))",
                border: "1px solid rgba(212,175,55,0.4)",
              }}
            >
              <Typography variant="overline" color="text.secondary">
                Signature ritual
              </Typography>
              <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}>
                Bridal calm checklist
              </Typography>
              <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
                {ritualChecklist.map((item) => (
                  <Stack direction="row" spacing={1.5} key={item}>
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "primary.main", mt: 0.7 }} />
                    <Typography variant="body1">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Gentle playlists, aromatherapy mists and post-glam touch-up kits ensure you feel pampered throughout.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>

    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <ServicesSection limit={4} />
    </Container>

    <Box sx={{ background: "linear-gradient(120deg, rgba(212,175,55,0.08), rgba(183,110,121,0.08))", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <FeaturedLooksCarousel />
        <WhyChooseSection />
      </Container>
    </Box>

    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <TestimonialsSection limit={3} />
      <BeforeAfterSection />
    </Container>

    <Box sx={{ backgroundColor: "#FFF9F6", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <InstagramFeed />
        <FAQSection />
        <QuickBookingStrip />
      </Container>
    </Box>
  </Box>
);

export default Home;
