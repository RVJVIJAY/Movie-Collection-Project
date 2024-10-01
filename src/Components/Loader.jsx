import React, { useEffect } from 'react';
import './Loder.css'

const Loader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, []);

  return (
    <div className='loader-container'>
      {/* New Lottie Player */}
      <dotlottie-player
        src="https://lottie.host/ed14c318-3b91-4e37-90af-7ef28aab8362/24rNgdRkXo.json"
        background="transparent"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Loader;
