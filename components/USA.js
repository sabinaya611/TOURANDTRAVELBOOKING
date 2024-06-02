import React from 'react';
import { Link } from 'react-router-dom';
const USA= () => {
  return (
    <div className="australia-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>1.YOSEMITE NATIONAL PARK </h2>
        <img src="https://plus.unsplash.com/premium_photo-1673283381255-3b75088e3963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WU9TRU1JVEUlMjBOQVRJT05BTCUyMFBBUkt8ZW58MHx8MHx8fDA%3D" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>   Yosemite National Park, situated in California's Sierra Nevada mountains, is renowned for its breathtaking natural beauty. Home to iconic landmarks such as El Capitan and Half Dome, the park features towering waterfalls, pristine meadows, and giant sequoia trees. Visitors can explore scenic trails, like the Mist Trail and the John Muir Trail, and marvel at the spectacular Yosemite Valley. Designated a UNESCO World Heritage Site, Yosemite captivates nature enthusiasts with its diverse ecosystems and awe-inspiring landscapes.
            </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>2.SEATTLE</h2>
        <img src="https://images.unsplash.com/photo-1531335773500-23410807365a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDIuU0VBVFRMRXxlbnwwfHwwfHx8MA%3D%3D" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>    Seattle, located in Washington State, is a vibrant city known for its iconic Space Needle and stunning waterfront. Surrounded by mountains, forests, and water, Seattle offers a mix of urban and natural attractions. Visitors can explore the historic Pike Place Market, the vibrant neighborhoods like Capitol Hill, and enjoy panoramic views from Kerry Park. The city is also famous for its tech industry, coffee culture, and the musical legacy of grunge bands like Nirvana.
             </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>3.DENVER</h2>
        <img src="https://plus.unsplash.com/premium_photo-1675778711074-03815a6bada9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8REVOVkVSfGVufDB8fDB8fHww" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>   Denver, the capital of Colorado, is a city known for its picturesque location at the foothills of the Rocky Mountains. Boasting a vibrant cultural scene, visitors can explore the Denver Art Museum, attend performances at the Red Rocks Amphitheatre, and stroll through the historic Larimer Square. The city's outdoor offerings include nearby hiking and skiing destinations, making it a gateway to recreational activities. Denver's blend of urban sophistication and access to natural beauty makes it a popular destination for both locals and tourists. </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>4.LAS VEGAS</h2>
        <img src="https://images.unsplash.com/photo-1634400139456-292e44ca5327?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fExBUyUyMFZFR0FTfGVufDB8fDB8fHww" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>    Las Vegas, located in Nevada, is internationally renowned as a vibrant entertainment and resort city. Known as the "Entertainment Capital of the World," it features iconic landmarks along the famous Las Vegas Strip, including extravagant hotels, casinos, and themed attractions. Visitors flock to enjoy world-class shows, gaming, and nightlife in this desert oasis. The city's dynamic energy and diverse entertainment options make it a global destination for those seeking excitement and entertainment.
 </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>5.CHARLESTON </h2>
        <img src="https://plus.unsplash.com/premium_photo-1694475442325-4e0055fe2dac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q0hBUkxFU1RPTnxlbnwwfHwwfHx8MA%3D%3D" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>   Charleston, situated in South Carolina, is a historic city known for its well-preserved architecture and Southern charm. The city's cobblestone streets and antebellum mansions reflect its rich history, dating back to the colonial era. Visitors can explore landmarks such as the Battery promenade, historic plantations like Boone Hall, and enjoy the vibrant culture and cuisine of this picturesque Southern city. Charleston's waterfront, lively markets, and cultural festivals contribute to its reputation as a captivating destination.</p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}><Link to="/booking">Book Now</Link></button>
      </div>
    </div>
  );
};

export default USA;
