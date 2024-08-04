import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Modal from 'react-modal';

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
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows} sx={{ cursor: 'pointer' }} onClick={() => openModal(item.img)}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
                style={{ objectFit: 'cover', display: 'block', margin: 'auto' }}
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
          },
        }}
      >
        <img src={modalImage} alt="modal" style={{ width: '100%', height: 'auto' }} />
        <button onClick={closeModal}>Close</button>
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
