import './Meme.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  const [memeTemplates, setMemeTemplates] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchMemeTemplates = async () => {
      try {
        const response = await axios.get('https://api.imgflip.com/get_memes');
        if (isMounted) {
          const templates = response.data.data.memes;
          setMemeTemplates(templates);
          console.log('Meme Templates:', templates);
        }
      } catch (error) {
        console.error('Error fetching meme templates:', error);
      }
    };

    fetchMemeTemplates();

    return () => {
      isMounted = false;
    };
  }, []);

  const getMemeImage = () => {
    // Check if memeTemplates array is not empty
    if (memeTemplates.length > 0) {
      const randomNumber = Math.floor(Math.random() * memeTemplates.length);
      const url = memeTemplates[randomNumber].url;
      setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
      }));
    } else {
      console.warn('Meme templates array is empty');
    }
  };

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          placeholder="Top text"
          type="text"
          value={meme.topText}
          onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
        />

        <input
          className="form--input"
          placeholder="Bottom text"
          type="text"
          value={meme.bottomText}
          onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
        />

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>

      <div className="meme--text top">{meme.topText}</div>
      <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
      <div className="meme--text bottom">{meme.bottomText}</div>
    </main>
  );
};

export default Meme;
