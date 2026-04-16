import React from 'react';

function ImageDisplay({ url }) {
  return (
    <div className="mt-4">
      <img 
        src={url} 
        alt="AI Generated" 
        className="img-fluid rounded shadow" 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
    </div>
  );
}

export default ImageDisplay;