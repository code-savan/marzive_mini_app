// web/src/pages/Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {
  // State to store the username; in a real Telegram mini app, you'll get this from Telegram.WebApp
  const [username, setUsername] = useState('there');

  useEffect(() => {
    // Simulated auth: In production, replace this with Telegram.WebApp data extraction
    // Example: const { first_name } = window.Telegram.WebApp.initDataUnsafe.user;
    const fakeUser = { first_name: "Eric" };
    setUsername(fakeUser.first_name);
  }, []);

  return (
    <div className="page home-page">
      <h1>Hi {username}! Welcome to the mini app.</h1>
      <p>This is the home page. Add your content here.</p>
    </div>
  );
};

export default Home;
