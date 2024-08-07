import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

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
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: imagePosition === 'right' ? 'row' : 'row-reverse',
        },
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: theme.spacing(3),
        gap: theme.spacing(2),
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: theme.spacing(2),
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
          loading="lazy"
          style={{
            maxWidth: '100%',
            borderRadius: theme.shape.borderRadius,
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'; // Hide the image if it fails to load
          }}
        />
      </Box>
    </Box>
  );
};

export default ImageTextSection;
