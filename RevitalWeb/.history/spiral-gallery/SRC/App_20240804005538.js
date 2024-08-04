import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, Box, Button, TextField } from '@mui/material';
import CustomImageList from '..src/CustomImageList';
import JobSearchLecture from '..src/JobSearchLecture';
import RecruitmentPreparationLecture from './RecruitmentPreparationLecture';
import axios from 'axios';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sentMessage, setSentMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/send-email', formData)
      .then((response) => {
        setSentMessage('הודעה נשלחה בהצלחה!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setSentMessage('שגיאה בשליחת ההודעה.');
      });
  };

  return (
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
      <Box component="form" onSubmit={handleSubmit} sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1 }}>
        <Typography variant="h6">Contact</Typography>
        <Typography variant="body1" paragraph>If you have any questions or would like to reach out, please use the form below:</Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Send</Button>
        {sentMessage && <Typography variant="body2" color="secondary" paragraph>{sentMessage}</Typography>}
      </Box>
      <Box className="footer" textAlign="center" py={2} bgcolor="#333" color="#fff">
        <Typography variant="body2">&copy; 2024 Revital Metuko. All Rights Reserved.</Typography>
      </Box>
    </Container>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job-search-lecture" element={<JobSearchLecture />} />
      <Route path="/recruitment-preparation-lecture" element={<RecruitmentPreparationLecture />} />
    </Routes>
  </Router>
);

export default App;
