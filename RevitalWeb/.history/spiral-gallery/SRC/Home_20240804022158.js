import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomImageList from './CustomImageList';

const Home = () => (
  <div>
    <Typography variant="h2" align="center" gutterBottom>
      Revital Metuko
    </Typography>
    <Typography variant="body1" align="right" paragraph>
      שלום! שמי רויטל מתוקו, ואני כאן כדי לעזור לכם להגשים את החלומות שלכם. אני בעלת תואר ראשון בפסיכולוגיה מאוניברסיטת רייכמן, עם התמחות בפסיכולוגיה ארגונית. במהלך הקריירה שלי ביצעתי התמחות במחלקת משאבי אנוש בחברת הייטק וליוויתי במשך ארבע שנים נערים ונערות מועמדים לשירות צבאי, במטרה לעזור להם למצוא את התפקיד המתאים להם ביותר במסגרת שירות המילואים.
      <br />
      כרס"ן במילואים ומרצה בנושאים שונים הקשורים לתהליך המיון בתעשיית ההייטק, אני מביאה לכם מהידע והניסיון האישי שלי כדי לעזור לכם להצליח. בהרצאותיי אני משתפת בטיפים חשובים להצלחה בתהליך המיון וההתקבלות לעבודה.
      <br />
      בנוסף, אני מנחה בני נוער לפני גיוס ומסייעת להם להבין מה נדרש כדי להגיע לתפקידים שהם שואפים אליהם. יחד נוכל לבנות עתיד מבטיח ומלא בהצלחות.
    </Typography>
    <CustomImageList />
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
      <div style={{ margin: '8px' }}>
        <Button variant="contained" color="primary" component={Link} to="/job-search-lecture">
          הרצאות לחיפוש עבודה בתעשייה במציאות המשתנה
        </Button>
      </div>
      <div style={{ margin: '8px' }}>
        <Button variant="contained" color="primary" component={Link} to="/recruitment-preparation-lecture">
          הרצאת הכנה לגיוס
        </Button>
      </div>
    </div>
  </div>
);

export default Home;
