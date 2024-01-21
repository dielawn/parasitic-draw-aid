import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const ImageToTextConverter = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setLoading(true);

      Tesseract.recognize(
        file,
        'eng',
        {
          logger: (info) => console.log(info),
        }
      ).then(({ data: { text } }) => {
        setText(text);
        setLoading(false);
      }).catch((error) => {
        console.error(error);
        setLoading(false);
      });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {loading && <p>Loading...</p>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default ImageToTextConverter;


