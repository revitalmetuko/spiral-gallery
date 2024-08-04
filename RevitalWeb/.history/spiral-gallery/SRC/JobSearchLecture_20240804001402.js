import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const JobSearchLecture = () => (
  <Container>
    <Typography variant="h2" align="center" gutterBottom>
      הרצאות לחיפוש עבודה בתעשייה במציאות המשתנה
    </Typography>
    <Typography variant="body1" align="right" paragraph>
      כאן ניתן להוסיף תוכן על ההרצאה, טיפים, ועוד.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Link to="/">
        <Button variant="contained" color="primary">
          חזרה לעמוד הראשי
        </Button>
      </Link>
    </Box>
  </Container>
);

export default JobSearchLecture;
