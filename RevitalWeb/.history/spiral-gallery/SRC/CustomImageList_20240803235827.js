import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

Modal.setAppElement('#root');  // Important for accessibility

const CustomImageList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
        {itemData.map((item) => {
          const cols = 1;
          const rows = 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows} sx={{ cursor: 'pointer' }} onClick={() => openModal(item.img)}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
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
          );
        })}
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
          <img src={modalImage} alt="modal" style={{ width: '100%', height: 'auto' }} />
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
        </div>
      </Modal>
    </div>
  );
};

const itemData = [
  { img: '/img/IMG_3363.jpeg', featured: true },
  { img: '/img/IMG_4815.jpeg' },
  { img: '/img/8ca01ed6-859c-43f2-9bc1-78a3dd2121d4.jpeg },
  { img: '/img/IMG_7943.jpeg' },
   { img: '/img/IMG_4816.jpeg', featured: true },
];

export default CustomImageList;