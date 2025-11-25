import galleryImage1 from '../assets/gallery/1.jpeg';
import galleryImage2 from '../assets/gallery/2.jpeg';
import galleryImage3 from '../assets/gallery/3.jpeg';
import galleryImage4 from '../assets/gallery/4.jpeg';
import galleryImage5 from '../assets/gallery/5.jpeg';
import galleryImage6 from '../assets/gallery/6.jpeg';
import galleryImage7 from '../assets/gallery/7.jpeg';
import galleryImage8 from '../assets/gallery/8.jpeg';

const localized = (tr, en = tr) => ({ tr, en });

const galleryMedia = {
  hideVideos: true,
  photos: [
    {
      id: 'photo-1',
      type: 'photo',
      title: localized('Vinçli Nakliye', 'Lift-assisted moving'),
      location: localized('Ankara merkez'),
      thumbnail: galleryImage1,
      src: galleryImage1
    },
    {
      id: 'photo-2',
      type: 'photo',
      title: localized('Ekipman Hazırlığı', 'Equipment staging'),
      location: localized('Yenimahalle'),
      thumbnail: galleryImage2,
      src: galleryImage2
    },
    {
      id: 'photo-3',
      type: 'photo',
      title: localized('Ofis Taşıma Ekibi', 'Office moving crew'),
      location: localized('Çankaya'),
      thumbnail: galleryImage3,
      src: galleryImage3
    },
    {
      id: 'photo-4',
      type: 'photo',
      title: localized('Depo Alanı', 'Warehouse floor'),
      location: localized('İvedik OSB'),
      thumbnail: galleryImage4,
      src: galleryImage4
    },
    {
      id: 'photo-5',
      type: 'photo',
      title: localized('Araç İçi Sabitleme', 'Load securing'),
      location: localized('Sincan'),
      thumbnail: galleryImage5,
      src: galleryImage5
    },
    {
      id: 'photo-6',
      type: 'photo',
      title: localized('Asansör Kurulumu', 'Lift installation'),
      location: localized('Etimesgut'),
      thumbnail: galleryImage6,
      src: galleryImage6
    },
    {
      id: 'photo-7',
      type: 'photo',
      title: localized('Araç Filosu', 'Fleet line-up'),
      location: localized('Ankara'),
      thumbnail: galleryImage7,
      src: galleryImage7
    },
    {
      id: 'photo-8',
      type: 'photo',
      title: localized('Şehirlerarası Yükleme', 'Intercity loading'),
      location: localized('Türkiye'),
      thumbnail: galleryImage8,
      src: galleryImage8
    }
  ],
  videos: [
    {
      id: 'video-1',
      type: 'video',
      title: localized('Ev Taşıma Süreci', 'Home Move Journey'),
      location: localized('Berlin'),
      thumbnail: galleryImage2,
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
    },
    {
      id: 'video-2',
      type: 'video',
      title: localized('Paketleme Detayları', 'Packing Details'),
      location: localized('Potsdam'),
      thumbnail: galleryImage3,
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
    },
    {
      id: 'video-3',
      type: 'video',
      title: localized('Depo Yönetimi', 'Warehouse Operations'),
      location: localized('Brandenburg'),
      thumbnail: galleryImage4,
      src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
    }
  ]
};

export default galleryMedia;


