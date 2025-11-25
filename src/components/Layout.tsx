import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink, useLocation } from "react-router-dom";
import React from "react";

// Vite handles image imports directly as URL strings
import logoImage from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "background.default", color: "text.primary" }}>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: "blur(12px)" }}>
        <Toolbar sx={{ justifyContent: "space-between", paddingTop: 0, paddingBottom: 0 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              height: { xs: 60, md: 120 },
            }}
          >
            <img
              src={logoImage}
              alt="Komal Artistry"
              style={{
                height: "100%",
                width: "auto",
                maxWidth: 300,
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>
          <Stack
            direction="row"
            spacing={{ xs: 0, md: 1 }}
            alignItems="center"
            flexWrap={{ xs: "wrap", md: "nowrap" }}
            justifyContent={{ xs: "center", md: "flex-end" }}
            sx={{ rowGap: { xs: 0.5, md: 0 }, maxWidth: { xs: "100%", md: "none" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color={location.pathname === item.path ? "primary" : "inherit"}
                sx={{
                  fontWeight: location.pathname === item.path ? 600 : 500,
                  fontSize: { xs: "1rem", md: "1.4rem" },
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton
              component="a"
              href="https://www.instagram.com/komal_artistry__"
              target="_blank"
              rel="noreferrer"
              sx={{ fontSize: { xs: "1.5rem", md: "1.75rem" } }}
            >
              <InstagramIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Container maxWidth={false} sx={{ flex: 1, px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 }, display: "flex", flexDirection: "column" }}>
          {children}
        </Container>
      </Box>
      <Box component="footer" sx={{ borderTop: "1px solid rgba(212, 175, 55, 0.3)", py: { xs: 1, md: 1.5 }, mt: "auto" }}>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}>© {new Date().getFullYear()} Komal Artistry. All rights reserved.</Typography>
          <Stack direction="row" spacing={1}>
            <Button component="a" href="https://wa.me/919860108248" target="_blank" rel="noreferrer" variant="text" sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}>
              WhatsApp
            </Button>
            <Button component="a" href="tel:+919860108248" variant="text" sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}>
              Call
            </Button>
            <Button component={RouterLink} to="/contact" variant="text" sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}>
              Booking
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
