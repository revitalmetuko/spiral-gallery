import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [
  { img: 'sp/IMG_3363.jpeg', title: 'Image 1' },
  { img: '/IMG_4815.jpeg', title: 'Image 2' },
  { img: '/8ca01ed6-859c-43f2-9bc1-78a3dd2121d4.jpeg', title: 'Image 3' },
  { img: '/IMG_7943.jpeg', title: 'Image 4' },
  { img: '/Screenshot 2024-08-03 215234.png', title: 'Image 5' },
  { img: '/IMG_4816.jpeg', title: 'Image 6' },
];

const SpiralContainer = styled(Box)({
  position: 'relative',
  width: '600px',
  height: '600px',
  margin: '2em auto',
});

const Image = styled('img')({
  position: 'absolute',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'transform 0.5s',
});

const App = () => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const centerX = 300;
  const centerY = 300;
  const radiusStep = 20;
  const angleStep = 30;
  let currentRadius = 100;

  const updateSpiral = () => {
    currentRadius = 100;
    return images.map((item, index) => {
      const angle = index * angleStep + currentAngle;
      const radians = angle * (Math.PI / 180);
      const x = centerX + currentRadius * Math.cos(radians) - 60;
      const y = centerY + currentRadius * Math.sin(radians) - 60;
      currentRadius += radiusStep;
      return { ...item, x, y, angle };
    });
  };

  const spiralImages = updateSpiral();

  const handleDragStart = (e, src) => {
    e.dataTransfer.setData('text/plain', src);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedSrc = e.dataTransfer.getData('text/plain');
    const newImages = [...images];
    newImages[index] = { img: draggedSrc, title: images[index].title };
    setCurrentAngle(currentAngle); // Trigger re-render
  };

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
      <SpiralContainer onDragOver={handleDragOver}>
        {spiralImages.map(({ img, x, y, angle, title }, index) => (
          <Image
            key={img}
            src={img}
            alt={`Revital Metuko Image ${index + 1}`}
            style={{ transform: `translate(${x}px, ${y}px) rotate(${angle}deg)` }}
            draggable
            onDragStart={(e) => handleDragStart(e, img)}
            onDrop={(e) => handleDrop(e, index)}
          />
        ))}
      </SpiralContainer>
      <Box textAlign="center" my={2}>
        <Button variant="contained" color="primary" onClick={() => setCurrentAngle(currentAngle - angleStep)}>
          Rotate Left
        </Button>
        <Button variant="contained" color="primary" onClick={() => setCurrentAngle(currentAngle + angleStep)} style={{ marginLeft: '10px' }}>
          Rotate Right
        </Button>
      </Box>
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
