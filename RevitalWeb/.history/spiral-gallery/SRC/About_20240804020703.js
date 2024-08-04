import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => (
  <Box>
    <Typography variant="h2" align="center" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1" align="right" paragraph>
      מידע נוסף על רויטל מתוקו.
      <br />
      כאן ניתן להוסיף פרטים נוספים על ההשכלה, הניסיון המקצועי והפעילות הנוכחית שלך.
    </Typography>
  </Box>
);

export default About;
