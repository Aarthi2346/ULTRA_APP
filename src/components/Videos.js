import React, { useState, useEffect } from 'react';
import './Videos.css';
import lpe from '../Videos/lung_pulmonary_edema.mp4';
import nerve from '../Videos/nerve.mp4';
import pneumonia from '../Videos/pneumonia.mp4';
import tendon from '../Videos/tendon.mp4';

const VideoPlayer = ({ src, title, onDelete }) => {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div className="video-block">
      <video 
        src={src}
        controls
        onClick={togglePlay}
        className="video-element"
      />
      <div className="video-info">
        <h3>{title}</h3>
        <button className="ai-button">AI Button</button>
        <button className="delete-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

const Videos = () => {
  const [uploadedVideos, setUploadedVideos] = useState(() => {
    const savedVideos = localStorage.getItem('uploadedVideos');
    return savedVideos ? JSON.parse(savedVideos) : [];
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('uploadedVideos', JSON.stringify(uploadedVideos));
  }, [uploadedVideos]);

  const handleVideoUpload = async (event) => {
    const files = event.target.files;
    const newVideos = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const base64 = await convertToBase64(file);
      newVideos.push({ url: base64, title: file.name });
    }
    setUploadedVideos([...uploadedVideos, ...newVideos]);
    setSuccessMessage('Video uploaded successfully!'); // Set success message
    setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
    event.target.value = null; // Reset file input
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleDeleteVideo = (index) => {
    const confirmed = window.confirm('Are you sure you want to delete?');
    if (confirmed) {
      const updatedVideos = uploadedVideos.filter((_, i) => i !== index);
      setUploadedVideos(updatedVideos);
    }
  };

  return (
    <div className="videos-container">
      <div className="upload-container">
        <label htmlFor="upload-input" className="upload-label">Upload Videos</label>
        <input 
          id="upload-input"
          type="file" 
          accept="video/mp4" 
          multiple 
          onChange={handleVideoUpload}
          className="upload-input"
        />
      </div>
      <div className="video-container">
        {uploadedVideos.map((video, index) => (
          <VideoPlayer 
            key={index} 
            src={video.url} 
            title={video.title} 
            onDelete={() => handleDeleteVideo(index)} 
          />
        ))}
        <VideoPlayer src={lpe} title="lung_pulmonary_edema" />
        <VideoPlayer src={nerve} title="nerve" />
        <VideoPlayer src={pneumonia} title="pneumonia" />
        <VideoPlayer src={tendon} title="tendon" />
      </div>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Videos;
