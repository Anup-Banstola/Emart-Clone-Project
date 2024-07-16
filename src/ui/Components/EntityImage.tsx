'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'antd';
import React, { useState } from 'react';

interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function EntityImage({ src, alt, width, height }: ImageType) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width, height }}
    >
      {!hovered ? (
        <Image src={src} alt={alt} width={width} height={height} />
      ) : (
        <div
          style={{
            width,
            height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <FontAwesomeIcon icon={faPlus} style={{ color: 'white' }} />
        </div>
      )}
    </div>
  );
}

export default EntityImage;
