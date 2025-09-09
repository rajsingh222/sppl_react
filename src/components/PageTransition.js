import React from 'react';

// No-op wrapper to keep imports stable if referenced
export default function PageTransition({ children }) {
  return <main>{children}</main>;
}
