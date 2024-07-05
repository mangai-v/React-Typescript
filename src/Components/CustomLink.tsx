import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const CustomLink: React.FC<LinkProps> = (props) => {
  return (
    <Link
      {...props}
      style={{
        padding: '10px',
        textDecoration: 'none',
        color: 'blue',
        ...props.style, // Merge custom styles with default styles
      }}
    />
  );
};

export default CustomLink;
