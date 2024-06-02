import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Train from './components/Train';
import Flight from './components/Flight';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Testimonials from './components/Testimonials';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Footer from './components/pages/Footer';
import Packages from './Packages';
import Booking from './Booking';
import USA from './components/USA';
import Tokyo from './components/Tokyo';
import Rome from './components/Rome';
import Paris from './components/Paris';
import NewYork from './components/NewYork';
import London from './components/London';
import Jordan from './components/Jordan';
import Greece from './components/Greece';
import Australia from './components/Australia';
import Destination from './components/pages/Destination';
import AboutUs from './components/AboutUs';
import TravelGuides from './components/TravelGuides';
import ReservationDetails from './components/ReservationDetails';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs/>} />
          <Route path="/reservationdetails" element={<ReservationDetails/>} />
          <Route path="/flight" element={<Flight/>} />
          <Route path="/tokyo" element={<Tokyo/>} />
          <Route path="/rome" element={<Rome/>} />
          <Route path="/paris" element={<Paris/>} />
          <Route path="/NewYork" element={<NewYork/>} />
          <Route path="/london" element={<London/>} />
          <Route path="/usa" element={<USA/>} />
          <Route path="/jordan" element={<Jordan/>} />
          <Route path="/australia" element={<Australia/>} />
          <Route path="/greece" element={<Greece/>}/>
          <Route path="/destination" element={<Destination/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/train" element={<Train/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/travelguide" element={<TravelGuides/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/testimonals" element={<Testimonials/>}/>
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
