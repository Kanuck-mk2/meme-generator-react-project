import './Meme.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Meme() {
  // State to hold meme data (topText, bottomText, randomImage)
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  // State to hold meme templates fetched from Imgflip API
  const [memeTemplates, setMemeTemplates] = useState([]);

  // Effect hook to fetch meme templates when the component mounts
  useEffect(() => {
    const fetchMemeTemplates = async () => {
      try {
        // Fetch meme templates from Imgflip API
        const response = await axios.get('https://api.imgflip.com/get_memes');

        // Update memeTemplates state with fetched data
        setMemeTemplates(response.data.data.memes);
      } catch (error) {
        console.error('Error fetching meme templates:', error);
      }
    };

    // Call the fetchMemeTemplates function when the component mounts
    fetchMemeTemplates();
  }, []);

  // Function to handle getting a new meme image
  const getMemeImage = () => {
    // Generate a random index to pick a meme template
    const randomNumber = Math.floor(Math.random() * memeTemplates.length);

    // Get the URL of the randomly selected meme template
    const url = memeTemplates[randomNumber].url;

    // Update the meme state with the new random image URL
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  // JSX for the Meme component
  return (
    <main>
      {/* Form for user input and meme generation */}
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

        {/* Button to trigger the generation of a new meme image */}
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>

      {/* Display generated meme with top and bottom text */}
      <div className="meme--text top">{meme.topText}</div>
      <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
      <div className="meme--text bottom">{meme.bottomText}</div>
    </main>
  );
}
