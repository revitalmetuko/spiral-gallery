import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import CustomImageList from './CustomImageList';
import JobSearchLecture from './JobSearchLecture';
import RecruitmentPreparationLecture from './RecruitmentPreparationLecture';

const HomePage = () => (
  <Container>
    <Typography variant="h2" align="center" gutterBottom>
      Revital Metuko
    </Typography>
    <Typography variant="body1" align="right" paragraph>
      שלום, שמי רויטל מתוקו.
      <br />
      אני בוגרת תואר ראשון BA בפסיכולוגיה מאוניברסיטת רייכמן, בהתמחות בפסיכולוגיה ארגונית. ביצעתי התמחות במחלקת משאבי אנוש בחברת הייטק, ומלווה במשך ארבע שנים נערים ונערות מועמדים לשירות צבאי, במטרה לעזור להם למצוא את התפקיד המתאים להם ביותר במסגרת שירות המילואים.
      <br />
      אני רס"ן במילואים ומרצה בנושאים שונים הקשורים לתהליך המיון בתעשיית ההייטק. בהרצאותיי אני משתפת מהידע והניסיון האישי שלי, ומעניקה טיפים חשובים להצלחה בתהליך.
      <br />
      בנוסף, אני מנחה בני נוער לפני גיוס ומסייעת להם להבין מה נדרש כדי להגיע לתפקידים שהם שואפים אליהם.
    </Typography>
    <CustomImageList />
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Box sx={{ m: 2 }}>
        <Link to="/job-search-lecture">
          <Button variant="contained" color="primary">
            הרצאות לחיפוש עבודה בתעשייה במציאות המשתנה
          </Button>
        </Link>
      </Box>
      <Box sx={{ m: 2 }}>
        <Link to="/recruitment-preparation-lecture">
          <Button variant="contained" color="primary">
            הרצאת הכנה לגיוס
          </Button>
        </Link>
      </Box>
    </Box>
    <Box component="form" action="mailto:revitalmetuko@gmail.com" method="post" enctype="text/plain" sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1 }}>
      <Typography variant="h6">Contact</Typography>
      <Typography variant="body1" paragraph>If you have any questions or would like to reach out, please use the form below:</Typography>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="4" required style={{ width: '100%', marginBottom: '10px', padding: '8px' }}></textarea>
      <Button type="submit" variant="contained" color="primary">Send</Button>
    </Box>
    <Box className="footer" textAlign="center" py={2} bgcolor="#333" color="#fff">
      <Typography variant="body2">&copy; 2024 Revital Metuko. All Rights Reserved.</Typography>
    </Box>
  </Container>
);

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/job-search-lecture" component={JobSearchLecture} />
      <Route path="/recruitment-preparation-lecture" component={RecruitmentPreparationLecture} />
    </Switch>
  </Router>
);

export default App;
