import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Location from './components/Location';
import History from './components/History';
import Footer from './components/Footer';
// Rooms section — hidden while reservations go through Booking.com.
// The components and data are kept; uncomment both lines to bring it back.
// import Apartments from './components/Apartments';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Booking />
        {/* <Apartments /> */}
        <Location />
        <History />
      </main>
      <Footer />
    </>
  );
}

export default App;
