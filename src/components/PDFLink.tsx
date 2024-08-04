// src/components/PDFLink.tsx
import React from 'react';
import { Link } from '@mui/material';

interface PDFLinkProps {
  file: string;
  children: React.ReactNode;
}

const PDFLink: React.FC<PDFLinkProps> = ({ file, children }) => {
  const handlePDFOpen = (file: string) => {
    window.open(file, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link
      component="button"
      color="primary"
      onClick={() => handlePDFOpen(file)}
    >
      {children}
    </Link>
  );
};

export default PDFLink;
