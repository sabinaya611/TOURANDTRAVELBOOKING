import React from 'react';
import { Link } from 'react-router-dom';
const Paris= () => {
  return (
    <div className="australia-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>1.EIFFEL TOWER</h2>
        <img src="https://media.istockphoto.com/id/1398282131/photo/eiffel-tower-surrounded-by-trees.webp?b=1&s=170667a&w=0&k=20&c=C2Ns3FLNqwgwwOoPda0ChSD6jXclmqP9zCpPPKC5epo=" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}> The Eiffel Tower, an architectural marvel, graces Paris with its iron elegance, a symbol of artistic brilliance. Ascending its heights reveals unparalleled views, a testament to its enduring allure. Illuminated by night, it transforms into a luminous icon, capturing the romantic essence of the City of Light. </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>2.LOUVRE MUSEUM</h2>
        <img src="https://images.unsplash.com/photo-1565099824688-e93eb20fe622?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG91dnJlJTIwbXVzZXVtfGVufDB8fDB8fHww" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>    The Louvre Museum, located in Paris, France, is the world's largest art museum and a historic monument. Housed in the Louvre Palace, it boasts a vast collection spanning from ancient civilizations to the 19th century. The museum is renowned for iconic works such as the Mona Lisa, the Venus de Milo, and the Winged Victory of Samothrace. With its distinctive glass pyramid entrance, the Louvre attracts millions of visitors annually, making it a cultural treasure trove and a symbol of artistic heritage. </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>3.VERSAILLES PALACE</h2>
        <img src="https://images.unsplash.com/photo-1590991290724-515f63a45625?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VkVSU0FJTExFUyUyMFBBTEFDRXxlbnwwfHwwfHx8MA%3D%3D" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>   The Palace of Versailles, located near Paris, France, is an opulent royal residence and UNESCO World Heritage site. Built in the 17th century, it served as the principal residence of French kings, including Louis XIV. The palace is known for its lavish architecture, ornate gardens, and the Hall of Mirrors, where the Treaty of Versailles was signed in 1919. Versailles remains a symbol of absolute monarchy and is a major tourist attraction, offering a glimpse into France's rich history and royal grandeur. </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>4.MONTMARTRE VINEYARD</h2>
        <img src="https://images.unsplash.com/photo-1636931384590-80172970b786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TU9OVE1BUlRSRSUyMFZJTkVZQVJEfGVufDB8fDB8fHww" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>   The Montmartre Vineyard, situated in the Montmartre neighborhood of Paris, is a charming and historic vineyard dating back to the Roman era. Nestled on the Butte Montmartre, it provides a picturesque setting with views of the city. The vineyard is known for producing Clos Montmartre wine, and during the Fête des Vendanges (Harvest Festival), locals celebrate with parades and events. The Montmartre Vineyard is a unique and tranquil spot in the heart of Paris, offering a peaceful escape from the urban hustle. </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>5.NOTRE DAME CATHEDRAL</h2>
        <img src="https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Tk9UUkUlMjBEQU1FJTIwQ0FUSEVEUkFMJTIwKENBVEglQzMlODlEUkFMRSUyME5PVFJFJTIwREFNRSUyMERFJTIwUEFSSVMpfGVufDB8fDB8fHww" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>  The Notre-Dame Cathedral, located on the Île de la Cité in Paris, is a masterpiece of French Gothic architecture. Construction began in the 12th century, and the cathedral served as a symbol of Paris for centuries. It features stunning stained glass windows, intricate sculptures, and the iconic flying buttresses. While the cathedral suffered a devastating fire in 2019, efforts are underway to restore this historic landmark to its former glory. The Notre-Dame Cathedral remains a symbol of French cultural and religious heritage.</p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}><Link to="/booking">Book Now</Link></button>
      </div>
    </div>
  );
};

export default Paris;
