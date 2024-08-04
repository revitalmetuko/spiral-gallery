import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const images = [
  '/public/IMG_3363.',
  '/IMG_4815.jpeg',
  '/8ca01ed6-859c-43f2-9bc1-78a3dd2121d4.jpeg',
  '/IMG_7943.jpeg',
  '/Screenshot 2024-08-03 215234.png',
  '/IMG_4816.jpeg',
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
    return images.map((src, index) => {
      const angle = index * angleStep + currentAngle;
      const radians = angle * (Math.PI / 180);
      const x = centerX + currentRadius * Math.cos(radians) - 60;
      const y = centerY + currentRadius * Math.sin(radians) - 60;
      currentRadius += radiusStep;
      return { src, x, y, angle };
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
    newImages[index] = draggedSrc;
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
        {spiralImages.map(({ src, x, y, angle }, index) => (
          <Image
            key={src}
            src={src}
            alt={`Revital Metuko Image ${index + 1}`}
            style={{ transform: `translate(${x}px, ${y}px) rotate(${angle}deg)` }}
            draggable
            onDragStart={(e) => handleDragStart(e, src)}
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
