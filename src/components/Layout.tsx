import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink, useLocation } from "react-router-dom";
import React from "react";

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
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default", color: "text.primary" }}>
      <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: "blur(12px)" }}>
        <Toolbar sx={{ justifyContent: "space-between", py: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>
            Komal Artistry
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color={location.pathname === item.path ? "primary" : "inherit"}
                sx={{ fontWeight: location.pathname === item.path ? 600 : 500 }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton component="a" href="https://www.instagram.com/komalartistry" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
        {children}
      </Container>
      <Box component="footer" sx={{ borderTop: "1px solid rgba(212, 175, 55, 0.3)", py: 3 }}>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="body2">© {new Date().getFullYear()} Komal Artistry. All rights reserved.</Typography>
          <Stack direction="row" spacing={2}>
            <Button component="a" href="https://wa.me/919820012345" target="_blank" rel="noreferrer" variant="text">
              WhatsApp
            </Button>
            <Button component="a" href="tel:+919820012345" variant="text">
              Call
            </Button>
            <Button component={RouterLink} to="/contact" variant="text">
              Booking
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
