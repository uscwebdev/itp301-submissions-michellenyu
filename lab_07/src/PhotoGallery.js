import React from 'react';
import { useState } from 'react';
import './index.css';

export default function PhotoGallery() {
  const [imageSrc, setImageSrc] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'
  );

  const [imageAlt, setImageAlt] = useState('Default Image');

  const [imageCaption, setImageCaption] = useState(
    'Click any of the buttons below to choose your character!'
  );

  function handleImageChange(newSrc, newAlt, newCaption) {
    setImageSrc(newSrc);
    setImageAlt(newAlt);
    setImageCaption(newCaption);
  }

  return (
    <div>
      <img id="default-image" src={imageSrc} alt={imageAlt} />

      <p>{imageCaption}</p>

      {/*buttons for changing the images*/}
      <button
        onClick={() =>
          handleImageChange(
            'https://assets.popbuzz.com/2023/35/who-plays-luffy-in-one-piece-1693569933-view-0.jpg',
            'Image 1',
            'Monkey D. Luffy'
          )
        }
      >
        Monkey D. Luffy
      </button>

      <button
        onClick={() =>
          handleImageChange(
            'https://afamilycdn.com/150157425591193600/2023/9/3/365388499-228001060223808-779710-4876-1693737874078-16937378742171999807846.jpeg',
            'Image 2',
            'Zoro'
          )
        }
      >
        Roronoa Zoro
      </button>

      <button
        onClick={() =>
          handleImageChange(
            'https://i.pinimg.com/1200x/99/6c/03/996c0346faffa063510693fbdd8e328f.jpg',
            'Image 3',
            'Sanji'
          )
        }
      >
        Vinsmoke Sanji
      </button>

      <button
        onClick={() =>
          handleImageChange(
            'https://sportshub.cbsistatic.com/i/2023/09/12/24fdba6c-d058-4bf0-93f2-a7048466435d/one-piece-live-action-netflix-nami.jpg',
            'Image 4',
            'Nami'
          )
        }
      >
        Nami
      </button>

      <button
        onClick={() =>
          handleImageChange(
            'https://mixdeseries.com.br/wp-content/uploads/2023/06/one-piece-live-action-usopp-nose-1024x576.webp',
            'Image 5',
            'Usopp'
          )
        }
      >
        Usopp
      </button>
    </div>
  );
}
