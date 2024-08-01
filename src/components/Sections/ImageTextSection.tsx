import React from 'react';
import { Box, Typography } from '@mui/material';

interface ImageTextSectionProps {
  imageSrc: string;
  title: string;
  text: string;
  imagePosition?: 'left' | 'right';
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  title,
  text,
  imagePosition = 'right',
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 3,
        gap: 2,
      }}
    >
      {/* Text Section */}
      {imagePosition == 'right' ? (
        <>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slight background to improve readability
            }}
          >
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h6" paragraph>
              {text}
            </Typography>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={imageSrc}
              alt={title}
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </>
      ) : (
        <>
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={imageSrc}
              alt={title}
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slight background to improve readability
            }}
          >
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h6" paragraph>
              {text}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ImageTextSection;
