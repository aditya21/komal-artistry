import { Fab, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const FloatingCTA: React.FC = () => (
  <Zoom in>
    <Fab
      color="secondary"
      sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 2000, boxShadow: 6 }}
      component="a"
      href="https://wa.me/919820012345"
      target="_blank"
      rel="noreferrer"
    >
      <WhatsAppIcon />
    </Fab>
  </Zoom>
);

export default FloatingCTA;
