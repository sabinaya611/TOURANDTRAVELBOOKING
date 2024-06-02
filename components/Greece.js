import React from 'react';
import { Link } from 'react-router-dom';
const Greece= () => {
  return (
    <div className="australia-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>1.OLYMPIA</h2>
        <img src="https://images.unsplash.com/photo-1610104557202-c288087e9efd?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}> Olympia, the capital of Washington State, is known for its rich cultural and political significance. Home to the Washington State Capitol, visitors can explore the impressive legislative buildings and the surrounding Capitol Campus. The city is situated at the southern tip of Puget Sound, offering picturesque waterfront views and outdoor activities. Olympia's blend of historic charm, natural beauty, and civic importance makes it a unique destination in the Pacific Northwest.</p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>2.MYKONOS</h2>
        <img src="https://plus.unsplash.com/premium_photo-1661935781384-b27f5faa9197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TVlLT05PU3xlbnwwfHwwfHx8MA%3D%3D" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>  Mykonos, a Greek island in the Cyclades, is famous for its vibrant nightlife, beautiful beaches, and charming white-washed buildings with blue accents. The island offers a mix of traditional Greek culture and a lively party atmosphere, attracting visitors from around the world. Mykonos Town features narrow streets, boutique shops, and iconic windmills overlooking the Aegean Sea. With its cosmopolitan flair and stunning landscapes, Mykonos is a popular destination for those seeking a blend of relaxation and excitement in the Greek Islands.</p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>3.DELPHI</h2>
        <img src="https://images.unsplash.com/photo-1573414829369-3c0aad230d2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8REVMUEhJfGVufDB8fDB8fHww" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>  Delphi, situated on the slopes of Mount Parnassus in Greece, is an ancient archaeological site renowned for its historical and religious significance. Once considered the center of the world in ancient Greek mythology, Delphi was home to the Oracle of Apollo. Visitors can explore the well-preserved ruins, including the Temple of Apollo and the Theater, while enjoying panoramic views of the surrounding landscape. Delphi's cultural and mystical heritage makes it a captivating destination for history enthusiasts and those interested in ancient Greek civilization.</p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>4.SANTORINI</h2>
        <img src="https://plus.unsplash.com/premium_photo-1661963725253-c0632ab8782d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U0FOVE9SSU5JfGVufDB8fDB8fHww" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}>  Santorini, a Greek island in the Aegean Sea, is famous for its dramatic landscapes, white-washed buildings, and crystal-clear waters. The island's iconic architecture with blue-domed churches perched on cliffs offers breathtaking views of the caldera. Santorini is known for its romantic ambiance, charming villages like Oia and Fira, and its unique black sand beaches. Sunset views, traditional cuisine, and archaeological sites, including the ancient city of Akrotiri, make Santorini a must-visit destination in the Cyclades.
            </p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Book Now</button>
      </div>
      <div className="australia-card" style={{ marginTop:'60px',width: '900px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
      <h2 style={{ marginTop: '10px' }}>5.ACROPOLIS OF ATHENS</h2>
        <img src="https://plus.unsplash.com/premium_photo-1668618252845-d7b02384708a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUNST1BPTElTJTIwT0YlMjBBVEhFTlN8ZW58MHx8MHx8fDA%3D" alt="Destination" style={{ width: '100%', height: 'auto',marginBottom:'20px' }} />
        <div className="australia-text" style={{ padding: '20px' }}>
          
          <p style={{ fontSize: '19px', lineHeight: '1.5',fontWeight:'bold' }}> The Acropolis of Athens, a UNESCO World Heritage site, is an ancient citadel perched on a rocky outcrop overlooking the city. Dominated by the iconic Parthenon, this archaeological masterpiece dates back to the 5th century BCE. Visitors can explore significant structures like the Propylaea, the Erechtheion, and the Temple of Athena Nike. The Acropolis stands as a symbol of ancient Greek civilization and remains a cultural treasure with its historical significance and architectural brilliance.</p>
        </div>
      </div>

      {/* Repeat the above card structure for 5 more places */}
      
      <div className="book-now-button" style={{ marginBottom: '20px' }}>
        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}><Link to="/booking">Book Now</Link></button>
      </div>
    </div>
  );
};

export default Greece;
