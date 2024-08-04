import React from 'react';
import { Container, Typography, ImageList, ImageListItem, Box, Button } from '@mui/material';

const images = [
  { img: '/\img\IMG_3363.jpeg', title: 'Image 1' },
  { img: '/spiral-gallery\public\img\IMG_3363.jpeg', title: 'Image 2' },
 
];

const App = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Revital Metuko
      </Typography>
      <Typography variant="body1" align="right" paragraph>
        השם שלי: רויטל מתוקו
        <br />
        בוגרת תואר ראשון BA לפסיכולוגיה באוניברסיטת רייכמן בהתמחות בפסיכולוגיה אירגונית. ביצעתי התמחות במחלקת משאבי אנוש בחברת הייטק, מלווה ארבע שנים נערים ונערות מועמדים לשירות צבאי להגיע לתפקיד שמתאים להם במסגרת שירות מילואים, רס"ן במילואים. עושה הרצאות ומשתפת מהידע האישי שלי על תהליך מיון בתעשיית ההייטק ומהסיפור האישי שלי מביאה טיפים. ומשתפת ידע ומנחה בני נוער לפני גיוס מה לעשות כדי להגיע לתפקיד שהם רוצים.
      </Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
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
};

export default App;
