import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import StatsCounters from './components/StatsCounters';
import ServicesTabs from './components/ServicesTabs';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ContactTestimonialsSection from './sections/ContactTestimonialsSection';
import './App.css';

const galleryItems = [
  { id: 1, image: `${process.env.PUBLIC_URL}/images/gallery/1.jpg`, title: 'Berlin Şehir İçi Taşıma', tag: 'PROJE', href: '/galeri#1' },
  { id: 2, image: `${process.env.PUBLIC_URL}/images/gallery/2.jpg`, title: 'Asansörlü Nakliyat', tag: 'EQUIPMENT', href: '/galeri#2' },
  { id: 3, image: `${process.env.PUBLIC_URL}/images/gallery/3.jpg`, title: 'Ofis Taşıma', tag: 'CASE', href: '/galeri#3' },
  { id: 4, image: `${process.env.PUBLIC_URL}/images/gallery/4.jpg`, title: 'Sigortalı Taşımacılık', tag: 'CASE', href: '/galeri#4' },
  { id: 5, image: `${process.env.PUBLIC_URL}/images/gallery/5.jpg`, title: 'Parsiyel Yükleme', tag: 'PROJE', href: '/galeri#5' }
];

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <HeroSection />
      <ServicesTabs />
      <WhyChooseUs />
      <StatsCounters />

      {/* GALERİDEN ÖNCE */}
      <ContactTestimonialsSection
        backgroundUrl={`${process.env.PUBLIC_URL}/images/background_logistic_truck.jpg`}
        phoneE164="+49 30 000000"
        whatsappE164="+49 30 000000"
        email="" // e-posta istemiyorsan boş bırak
      />

      <Gallery
        items={galleryItems}
        title="LÜKS BERLİN’DEN KARELER"
        eyebrow="GALERİ"
        viewAllHref="/galeri"
        variant="carousel"
        className="bg-white"
      />
      <Footer />
    </div>
  );
}

export default App;

