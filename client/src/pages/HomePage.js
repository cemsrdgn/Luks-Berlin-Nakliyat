import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import ServicesTabs from '../components/ServicesTabs';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsCounters from '../components/StatsCounters';
import Gallery from '../components/Gallery';
import ContactTestimonialsSection from '../sections/ContactTestimonialsSection';
import galleryItemsBase from '../data/galleryItems';
import { servicesContent } from '../data/servicesData';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'tr';
  const galleryCopy = t('homeGallery', { returnObjects: true }) || {};

  const galleryItems = useMemo(() => {
    // Get domestic services titles
    const domesticCategory = servicesContent.categories.find((cat) => cat.slug === 'domestic');
    const domesticServices = domesticCategory?.services || [];
    const serviceTitles = domesticServices.map((service) => service.copy[lang]?.title || '');

    // Map gallery items to service titles
    // Use service titles for first items, repeat if needed for 8 items
    return galleryItemsBase.map((item, index) => {
      const serviceIndex = index % serviceTitles.length;
      const title = serviceTitles[serviceIndex] || `Gallery Item ${index + 1}`;
      return {
        ...item,
        title
      };
    });
  }, [lang, galleryItemsBase.length]);

  return (
    <>
      <HeroSection />
      <ServicesTabs />
      <WhyChooseUs />
      <StatsCounters />
      <ContactTestimonialsSection
        backgroundUrl={`${process.env.PUBLIC_URL}/images/background_logistic_truck.jpg`}
        phoneE164="+90 541 596 54 91"
        whatsappE164="+90 541 596 54 91"
      />
      <Gallery
        items={galleryItems}
        title={galleryCopy.title}
        eyebrow={galleryCopy.eyebrow}
        viewAllHref="/gallery"
        variant="carousel"
        className="bg-white"
        ctaLabel={galleryCopy.cta}
        navPrevLabel={galleryCopy.navPrev}
        navNextLabel={galleryCopy.navNext}
      />
    </>
  );
};

export default HomePage;

