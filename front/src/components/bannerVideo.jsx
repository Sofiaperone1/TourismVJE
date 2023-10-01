import React from 'react';
import './components.css'; // Importa el archivo de estilos CSS
import bannervideo from "../imgs/bannervideo.mp4"


function BannerVideo() {

  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={bannervideo} type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
      
      <div
     className="text-overlay">
        <p>There is no time</p>
        <h1>like this time</h1>
      </div>
    </div>
  );
}

export default BannerVideo;
