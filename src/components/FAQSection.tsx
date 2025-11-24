import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../data/content";

const FAQSection = () => (
  <Paper sx={{ mt: 6, p: { xs: 2, md: 3 }, borderRadius: 4, backgroundColor: "rgba(255,255,255,0.9)" }}>
    <Typography variant="overline" color="secondary">
      FAQ
    </Typography>
    <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif", mb: 2 }}>
      Questions we get asked often
    </Typography>
    {faqs.map((faq) => (
      <Accordion key={faq.question} sx={{ backgroundColor: "transparent", boxShadow: "none", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Typography fontWeight={600}>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Paper>
);

export default FAQSection;
