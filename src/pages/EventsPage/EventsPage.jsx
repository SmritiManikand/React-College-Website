import React, { useEffect, useState } from 'react';
import './EventsPage.css'

const EventsPage = () => {
  const eventData = [
    {
      imageUrl: 'tech.jpg',
      title: 'Tech Conference 2024',
      description: 'An annual tech conference with the latest in technology and innovation.',
      listItems: [],
    },
    {
      imageUrl: 'science.jpeg',
      title: 'Science fair',
      description: 'An exciting day of sports activities and competitions.',
      listItems: [],
    },
    {
      imageUrl: 'music.jpeg',
      title: 'Music Fest',
      description: 'A weekend filled with music from top bands and artists.',
      listItems: [],
    },
    {
      imageUrl: 'art.jpg',
      title: 'Art Exhibition',
      description: 'A display of the finest art from upcoming artists.',
      listItems: [],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentEvent = eventData[currentIndex];

  return (
    <>
    <h1>Events</h1>
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="card" style={{ width: 600, height: 400 }}>
      <img src={currentEvent.imageUrl} className="card-img-top" alt={currentEvent.title} style={{ height: 200, objectFit: 'cover' }} />
      <div className="card-body" style={{ padding: 20 }}>
        <h5 className="card-title" style={{ fontSize: 24 }}>{currentEvent.title}</h5>
        <p className="card-text" style={{ fontSize: 18 }}>{currentEvent.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        {currentEvent.listItems.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  </div>
    </>
  );
};

export default EventsPage;