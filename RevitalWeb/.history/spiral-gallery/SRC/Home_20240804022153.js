import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomImageList from './CustomImageList';

const Home = () => (
  <Box>
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
        <Button variant="contained" color="primary" component={Link} to="/job-search-lecture">
          הרצאות לחיפוש עבודה בתעשייה במציאות המשתנה
        </Button>
      </Box>
      <Box sx={{ m: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/recruitment-preparation-lecture">
          הרצאת הכנה לגיוס
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Home;
