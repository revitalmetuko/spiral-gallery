import React, { useState } from 'react';
import { Typography, Modal, Box, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const itemData = [
  { img: '/img/IMG_4821.jpeg', title: 'Image 1' },
  { img: '/img/92E730F0-913B-4CDE-B1A7-B096B19FCC21.png', title: 'Image 2' },
  { img: '/img/6D0D7A30-AAE8-4D06-BD70-EB7642129AFB.png', title: 'Image 3' },
  { img: '/img/ECAE2E2A-14EA-475E-B1F6-F10ED11E7A42.png', title: 'Image 4' },
  { img: '/img/IMG_4822.jpeg', title: 'Image 5' },
  { img: '/img/IMG_4823.jpeg', title: 'Image 6' },
  { img: '/img/4BD9BA4A-873D-4813-8ECA-325A2A53818E.png', title: 'Image 7' },
  { img: '/img/C07D2658-DB82-4417-BA14-B08CB8668D21.png', title: 'Image 8' },
  { img: '/img/B5BFAF9D-A8E5-43E2-8358-D098D3757473.png', title: 'Image 9' },
];

const RecruitmentPreparationLecture = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = () => setCurrentIndex((currentIndex - 1 + itemData.length) % itemData.length);
  const handleNext = () => setCurrentIndex((currentIndex + 1) % itemData.length);

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        הרצאת הכנה לגיוס
      </Typography>
      <Typography variant="body1" align="right" paragraph>
        אני רויטל מתוקו, מייסדת ומנהלת תוכנית TECH IT, 
        יוזמה קהילתית שהוקמה לפני כשלוש שנים  בהובלתי ועוד מתנדבות , במטרה לגשר על הפער בחינוך הטכנולוגי לנוער יוצאי אתיופיה בישראל. הפרויקט שואף להנגיש ידע והזדמנויות בתחום הטכנולוגי לצעירים לפני שירותם הצבאי, עם דגש על הכנה לתפקידים טכנולוגיים בצה"ל.
         היוזמה נולדה מתוך הבנה שהצבא משמש כפלטפורמה משמעותית לשינוי חברתי והעצמה.
        <br /><br />
    פעילויות מרכזיות שביצעתי במסגרת התוכנית שיזמתי 
        <br />
        1. **סדנאות וסמינרים:** מארגנים סדנאות וסמינרים עם אנשי מקצוע מהתעשייה ובוגרי יחידות טכנולוגיות בצה"ל שמספרים על ניסיונם ומספקים הדרכה על מסלולי הקריירה הטכנולוגיים. משתתפים בולטים כוללים את מאור שלמה, מנכ"ל אקספלוריום, משה זיני, מגייס מייקרוסופט ובוגרים של 8200.
        <br />
        ויטל ליוותה באופן אישי כ-40 נערים ונערות בתהליך זה. היוזמה זכתה למשוב חיובי ממשתתפים והובילה לגיוס של מרבית המשתתפים בתפקידים טכנולוגים בצה"ל.
        <br /><br />
        בנוסף לכך אני מלווה כשלוש שנים ביחידת מגשימים ומלווה מאות בני נוער מסייעת להם להגיע לתפקידים בצה"ל. מייעצת ומבינה. להלן כמה פידבקים מתוכנית Tech it ומלשבים שלוויתי. מוזמנים לפנות לתיאום הרצאה בנושא.
      </Typography>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {itemData.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.title}
            onClick={() => handleOpen(index)}
            style={{ width: '200px', height: '200px', margin: '8px', cursor: 'pointer' }}
          />
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '80%', bgcolor: 'background.paper', boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={itemData[currentIndex].img}
            alt={itemData[currentIndex].title}
            style={{ width: '100%', height: 'auto', maxHeight: '80vh' }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
            <IconButton aria-label="previous" onClick={handlePrev}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton aria-label="next" onClick={handleNext}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default RecruitmentPreparationLecture;
