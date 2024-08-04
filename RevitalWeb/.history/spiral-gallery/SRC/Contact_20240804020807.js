import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import axios from 'axios';

const Contact = () => {
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
        console.error('Error sending email:', error);
        setSentMessage('שגיאה בשליחת ההודעה.');
      });
  };

  return (
    <Box>
      <Typography variant="h2" align="center" gutterBottom>
        Contact
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1 }}>
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
    </Box>
  );
};

export default Contact;
