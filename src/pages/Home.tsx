import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import FeaturedLooksCarousel from "../components/FeaturedLooksCarousel";
import WhyChooseSection from "../components/WhyChooseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import QuickBookingStrip from "../components/QuickBookingStrip";
import BeforeAfterSection from "../components/BeforeAfterSection";
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

    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <PortfolioSection limit={6} />
    </Container>

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
        <FAQSection />
        <QuickBookingStrip />
      </Container>
    </Box>
  </Box>
);

export default Home;
