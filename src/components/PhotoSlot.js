import React, { useState } from 'react';

const PhotoSlot = () => {
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="photo-slot">
      <h3>Upload Your Photo</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div className="photo-display">
        {photo ? (
          <img src={photo} alt="Uploaded" className="uploaded-photo" />
        ) : (
          <p>No photo uploaded</p>
        )}
      </div>
    </div>
  );
};

export default PhotoSlot;
