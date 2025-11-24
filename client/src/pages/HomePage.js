import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import ServicesTabs from '../components/ServicesTabs';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsCounters from '../components/StatsCounters';
import Gallery from '../components/Gallery';
import ContactTestimonialsSection from '../sections/ContactTestimonialsSection';
import galleryItemsBase from '../data/galleryItems';

const HomePage = () => {
  const { t } = useTranslation();
  const galleryCopy = t('homeGallery', { returnObjects: true }) || {};

  const galleryItems = useMemo(() => {
    const copyItems = galleryCopy.items || [];
    if (copyItems.length) {
      return copyItems.slice(0, galleryItemsBase.length).map((copyItem, index) => ({
        ...galleryItemsBase[index],
        title: copyItem.title,
        tag: copyItem.tag
      }));
    }
    return galleryItemsBase.map((item, index) => ({
      ...item,
      title: `Gallery Item ${index + 1}`
    }));
  }, [galleryCopy.items]);

  return (
    <>
      <HeroSection />
      <ServicesTabs />
      <WhyChooseUs />
      <StatsCounters />
      <ContactTestimonialsSection
        backgroundUrl={`${process.env.PUBLIC_URL}/images/background_logistic_truck.jpg`}
        phoneE164="+49 30 000000"
        whatsappE164="+49 30 000000"
        email=""
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

