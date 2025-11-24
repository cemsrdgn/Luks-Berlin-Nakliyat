const galleryImagesBase = `${process.env.PUBLIC_URL}/images/gallery`;

const localized = (tr, en = tr) => ({ tr, en });

const galleryMedia = {
  photos: [
    {
      id: 'photo-1',
      type: 'photo',
      title: localized('Asansörlü Taşıma', 'Lift-Assisted Moving'),
      location: localized('Berlin Mitte'),
      thumbnail: `${galleryImagesBase}/1.jpg`,
      src: `${galleryImagesBase}/1.jpg`
    },
    {
      id: 'photo-2',
      type: 'photo',
      title: localized('Paketleme Hazırlığı', 'Packing Prep'),
      location: localized('Prenzlauer Berg'),
      thumbnail: `${galleryImagesBase}/2.jpg`,
      src: `${galleryImagesBase}/2.jpg`
    },
    {
      id: 'photo-3',
      type: 'photo',
      title: localized('Ofis Mobilyaları', 'Office Furniture'),
      location: localized('Charlottenburg'),
      thumbnail: `${galleryImagesBase}/3.jpg`,
      src: `${galleryImagesBase}/3.jpg`
    },
    {
      id: 'photo-4',
      type: 'photo',
      title: localized('Depo Alanı', 'Warehouse Floor'),
      location: localized('Tempelhof'),
      thumbnail: `${galleryImagesBase}/4.jpg`,
      src: `${galleryImagesBase}/4.jpg`
    },
    {
      id: 'photo-5',
      type: 'photo',
      title: localized('Teslimat Öncesi Kontrol', 'Pre-Delivery Check'),
      location: localized('Friedrichshain'),
      thumbnail: `${galleryImagesBase}/5.jpg`,
      src: `${galleryImagesBase}/5.jpg`
    },
    {
      id: 'photo-6',
      type: 'photo',
      title: localized('Korumalı Ambalaj', 'Protective Wrapping'),
      location: localized('Wedding'),
      thumbnail: `${galleryImagesBase}/1.jpg`,
      src: `${galleryImagesBase}/1.jpg`
    }
  ],
  videos: [
    {
      id: 'video-1',
      type: 'video',
      title: localized('Ev Taşıma Süreci', 'Home Move Journey'),
      location: localized('Berlin'),
      thumbnail: `${galleryImagesBase}/2.jpg`,
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
    },
    {
      id: 'video-2',
      type: 'video',
      title: localized('Paketleme Detayları', 'Packing Details'),
      location: localized('Potsdam'),
      thumbnail: `${galleryImagesBase}/3.jpg`,
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
    },
    {
      id: 'video-3',
      type: 'video',
      title: localized('Depo Yönetimi', 'Warehouse Operations'),
      location: localized('Brandenburg'),
      thumbnail: `${galleryImagesBase}/4.jpg`,
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
    }
  ]
};

export default galleryMedia;


