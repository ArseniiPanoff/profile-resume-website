// src/components/PDFLink.tsx
import React from 'react';
import { Button } from '@mui/material';

interface PDFLinkProps {
  file: string;
  children: React.ReactNode;
}

const PDFLink: React.FC<PDFLinkProps> = ({ file, children }) => {
  const handlePDFOpen = (file: string) => {
    window.open(file, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={() => handlePDFOpen(file)}
    >
      {children}
    </Button>
  );
};

export default PDFLink;
