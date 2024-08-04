import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import JobSearchLecture from './JobSearchLecture';
import RecruitmentPreparationLecture from './RecruitmentPreparationLecture';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Revital Metuko
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/job-search-lecture" element={<JobSearchLecture />} />
            <Route path="/recruitment-preparation-lecture" element={<RecruitmentPreparationLecture />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
};

export default App;
