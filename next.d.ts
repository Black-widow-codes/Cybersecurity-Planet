declare module 'next/link' {
  import React from 'react';
  
  export interface LinkProps {
    href: string;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  const Link: React.FC<LinkProps>;
  export default Link;
}
