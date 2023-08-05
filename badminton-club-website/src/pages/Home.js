import InstLogo from "../images/instlogo.png";
import Logo1 from "../images/Logo1.png";
import React, { useState, useEffect } from 'react';

function Home() { 
  const images = [
    InstLogo, Logo1
    // Add more image URLs here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // This function will be called every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      // Calculate the next image index by incrementing currentImageIndex
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImageIndex);
    }, 3000); // 5000 milliseconds = 5 seconds

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  
  return (
    <div class = "info">


          <div class = "text">
            <div class = "title">What is our Badminton Club?</div>
            <p>Our Badminton Club is a place where people who enjoy the sport of badminton can come to meet and talk about different things. 
            We host meetings triweekly where we discuss different things such as where to train, details of the upcoming season, and more.
            Additionally, every month we plan to host an open gym where anyone can come in and play. We limit the amount of people for each open gym to 25 people so everyone can play.
            You can sign up for these open gyms on the events page of this website. Towards the end of both semesters, we will also hold a torunament with rewards.</p>
          </div>
{/* 
          <div class = "content">
            <img src={images[currentImageIndex]} alt="Badminton Club" style={{ width: '100vw', height: '300px'}} />
          </div> */}


    </div>
    
  );
}

export default Home;
