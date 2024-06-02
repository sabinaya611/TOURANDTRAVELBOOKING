import React from 'react';
// Import your CSS file
import { Link } from 'react-router-dom';

const Destination = () => {
  return (
    <div className="destination-page">
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/1442611988/photo/couple-enjoying-the-view-on-top-mountain-overlooking-whitsundays-ocean.webp?b=1&s=170667a&w=0&k=20&c=zBT3pVQelykoJ3mr6SKJKjHDpnaEO6txqbR4mbHzvtk=" alt="Destination" />
        <div className="explore-overlay"><Link to="/australia"> Australia</Link></div>
      </div>
      
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/475124388/photo/white-church-in-oia-town-on-santorini-island-in-greece.webp?b=1&s=170667a&w=0&k=20&c=g1EKRJlG2V72BC7rNnIJ3gsxeCd1nSWd6cKYvfkLGpE=" alt="Destination" />
        <div className="explore-overlay"><Link to="/greece">Greece</Link></div>
      </div>
      
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/1172709715/photo/asian-woman-traveler-sitting-in-petra-jordan.webp?b=1&s=170667a&w=0&k=20&c=L8hY_F83_NE0ovPLr3NFzgw9W7ySDKRUZxC_ctQeOTw=" alt="Destination" />
        <div className="explore-overlay"><Link to="/jordan">Jordan</Link></div>
      </div>
      
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/1152026755/photo/tower-bridge.webp?b=1&s=170667a&w=0&k=20&c=-FypmP37QKB7cWqdyNzRyUQMsD7T3JeD1PsSoP2pLGs=" alt="Destination" />
        <div className="explore-overlay"><Link to="/london">London</Link></div>
      </div>
      
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/183036930/photo/eiffel-tower-and-garden-in-paris-france.webp?b=1&s=170667a&w=0&k=20&c=9KO4fGZZKWpEjrGaZmJCqw_ehyRA7fF6MaoB967-Lng=" alt="Destination" />
        <div className="explore-overlay"><Link to="/paris">Paris</Link></div>
      </div>
      
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/1094564176/photo/colosseum-in-rome-and-morning-sun-italy.webp?b=1&s=170667a&w=0&k=20&c=Q43P7NfcKQ7SNDlbVPLDKuOoQ3vbHggLpmpH-SG_-8w=" alt="Destination" />
        <div className="explore-overlay"><Link to="/rome">Rome</Link></div>
      </div>
      
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/1479771597/photo/tokyo-japan-skyline-with-the-tokyo-tower.webp?b=1&s=170667a&w=0&k=20&c=79P8hSSeH1C03rSxgdYOVi49xIU0_H2lPnxeKEFJ6C0=" alt="Destination" />
        <div className="explore-overlay"><Link to="/tokyo">Tokyo</Link></div>
      </div>
      
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/623595614/photo/new-york-city-skyline-statue-of-liberty.webp?b=1&s=170667a&w=0&k=20&c=WRxMnWUtyEJcK67DerpWpzO1ERCqL0TXTP91tvtdzZs=" alt="Destination" />
        <div className="explore-overlay"><Link to="/usa">USA</Link></div>
      </div>
      
      <div className="destination-card">
        <img src="https://media.istockphoto.com/id/1373048506/photo/the-brooklyn-bridge-freedom-tower-and-lower-manhattan.webp?b=1&s=170667a&w=0&k=20&c=8Lsa9Zom4PN-NBYB2Ob8NmTm872OjMtJtBqoIhTgN8Q=" alt="Destination" />
        <div className="explore-overlay"><Link to="/newyork">New York</Link></div>
      </div>
      
      {/* Add more destination cards as needed */}
    </div>
    
  );
};

export default Destination;
