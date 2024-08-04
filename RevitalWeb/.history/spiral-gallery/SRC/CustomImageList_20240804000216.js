import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

Modal.setAppElement('#root');  // Important for accessibility

const CustomImageList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openModal = (index) => {
    setModalImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
  };

  const prevImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + itemData.length) % itemData.length);
  };

  return (
    <div>
      <ImageList
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translateZ(0)',
        }}
        rowHeight={164}  // Set rowHeight to ensure same size
        gap={1}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={item.img} cols={1} rows={1} sx={{ cursor: 'pointer' }} onClick={() => openModal(index)}>
            <img
              {...srcset(item.img, 250, 200, 1, 1)}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover', display: 'block', width: '100%', height: '100%' }}
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            border: 'none',
            borderRadius: '10px',
            overflow: 'hidden',
            width: '80%',
            maxWidth: '600px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <div style={{ position: 'relative' }}>
          <img src={itemData[modalImageIndex].img} alt="modal" style={{ width: '100%', height: 'auto' }} />
          <IconButton
            onClick={closeModal}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={prevImage}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transform: 'translateY(-50%)',
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={nextImage}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              transform: 'translateY(-50%)',
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </Modal>
    </div>
  );
};

const itemData = [
  { img: '/img/IMG_3363.jpeg', title: 'Image 1', featured: true },
  { img: '/img/IMG_4815.jpeg', title: 'Image 2' },
  { img: '/img/8ca01ed6-859c-43f2-9bc1-78a3dd2121d4.jpeg', title: 'Image 3' },
  { img: '/img/IMG_7943.jpeg', title: 'Image 4' },
  { img: '/img/Screenshot 2024-08-03 215234.png', title: 'Image 5' },
  { img: '/img/IMG_4816.jpeg', title: 'Image 6', featured: true },
];

export default CustomImageList;
