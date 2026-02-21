import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import CarRentalBooking from './pages/Booking/CarRentalBooking';
import LogisticsQuote from './pages/Quote/LogisticsQuote';
import MyShipments from './pages/Dashboard/MyShipments';
import MyRentals from './pages/Dashboard/MyRentals';
import NewRequest from './pages/Dashboard/NewRequest';

import AdminOverview from './pages/Admin/AdminOverview';
import AdminFleet from './pages/Admin/AdminFleet';
import AdminQuotes from './pages/Admin/AdminQuotes';
import AdminBookings from './pages/Admin/AdminBookings';
import AdminClients from './pages/Admin/AdminClients';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hiddenRoutes = ['/dashboard', '/book/rental', '/quote/logistics', '/admin'];
  const shouldHideLayout = hiddenRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="app-wrapper flex flex-col" style={{ minHeight: '100vh' }}>
      {!shouldHideLayout && <Navbar />}
      <main style={{ flex: '1' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Client Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/shipments" element={<MyShipments />} />
          <Route path="/dashboard/rentals" element={<MyRentals />} />
          <Route path="/dashboard/new" element={<NewRequest />} />
          <Route path="/book/rental" element={<CarRentalBooking />} />
          <Route path="/quote/logistics" element={<LogisticsQuote />} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminOverview />} />
          <Route path="/admin/fleet" element={<AdminFleet />} />
          <Route path="/admin/quotes" element={<AdminQuotes />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/clients" element={<AdminClients />} />
        </Routes>
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default App;
