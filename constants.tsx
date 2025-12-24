import React from 'react';
import { Shield, Zap, Wifi, Tv, Coffee, Utensils, Calendar, Camera } from 'lucide-react';
import { ApartmentType, Amenity, Review } from './types';

// Raw Dropbox URL for the provided property images
export const MAIN_PROPERTY_IMAGE = "https://www.dropbox.com/scl/fi/en2bjktkk3szggs4p9gfc/IMG_8894.png?rlkey=70bln9pbns7zu7us9xt44vqi0&st=vbogm9ic&raw=1";
export const INTERIOR_IMAGE_1 = "https://www.dropbox.com/scl/fi/7lr20qqyqdhb31ep1b9w3/400CF76F-24B2-46D8-9F88-A3BC6E8A2983.png?rlkey=mw0q3sp7fqj8qzkdq4mo086mc&st=6o45ljw3&raw=1";
export const INTERIOR_IMAGE_2 = "https://www.dropbox.com/scl/fi/3gsmp2an7jxsyolqcfyt5/IMG_8863.png?rlkey=fb3nnyx2p75qm4bhp05v3nd4r&st=fzfirtza&raw=1";
export const INTERIOR_IMAGE_3 = "https://www.dropbox.com/scl/fi/pkwh4czsirit283hxsiad/IMG_8967.png?rlkey=c7e4yrfh2pttyfh7byx2ouu1o&st=2eaqmc7x&raw=1";
export const INTERIOR_IMAGE_4 = "https://www.dropbox.com/scl/fi/d8rnts54xefk6syf1ei9r/IMG_8921.png?rlkey=v21zf2hee1sj5s184hrsxbkzk&st=p95wzoxs&raw=1";
export const INTERIOR_IMAGE_5 = "https://www.dropbox.com/scl/fi/1lnil0gdyc3r4u0a74jm0/806E4115-5AC1-4DDE-85AA-1A1FF1D8DD6A.png?rlkey=lbcg10u9g2lzxit3kxi1bz8md&st=u41fqqel&raw=1";
export const INTERIOR_IMAGE_6 = "https://www.dropbox.com/scl/fi/qxfo2is2czc54lsbh1e0w/8050731A-E56D-4FDD-8932-E71E5BB048CB.png?rlkey=sjpbhij49eqqdk0532ud7d2zl&st=r0qbmefl&raw=1";
export const INTERIOR_IMAGE_7 = "https://www.dropbox.com/scl/fi/tqe2edb1b4uwnjssir6fh/IMG_8881.png?rlkey=ebz0bs89q0671ljnlmk35svow&st=p91qjcfz&raw=1";
export const INTERIOR_IMAGE_8 = "https://www.dropbox.com/scl/fi/8527iiqbcvr623hhuitcp/IMG_8891.png?rlkey=r2zi85m8gh2z0udegpwsf59se&st=u2yhn0d8&raw=1";
export const EVENT_IMAGE = "https://www.dropbox.com/scl/fi/6oil7tou0n4sh9xd8f2mg/IMG_8996.jpeg?rlkey=lep2xtc5tc3qkki6fxrno891c&st=dwsi6djz&raw=1";

// Raw Dropbox URL for the logo
export const LOGO_IMAGE = "https://www.dropbox.com/scl/fi/r3v4l0eyxj7b016fwqk15/39867847-b831-42be-9386-ed42a4f0abb6.jpeg?rlkey=g1zmca4zw3dd7b7knokhyd4lu&st=vbv3rqlx&raw=1";

export const APARTMENTS: ApartmentType[] = [
  {
    id: '2br',
    name: '2-Bedroom Apartment',
    price: '₦120,000',
    description: 'Perfect for business travelers or small families seeking refined comfort and executive elegance.',
    image: INTERIOR_IMAGE_1,
    features: ['En-suite bathrooms', 'Luxury linens', 'Private workstation', 'Smart Home Access']
  },
  {
    id: '3br',
    name: '3-Bedroom Apartment',
    price: '₦155,000',
    description: 'The pinnacle of spacious luxury, designed for groups and extended stays in the heart of Amagba GRA.',
    image: INTERIOR_IMAGE_2,
    features: ['Gourmet kitchen', 'Spacious lounge', 'King-size beds', 'Private Terrace View']
  },
  {
    id: 'party',
    name: 'Party / Event Booking',
    price: '₦170,000',
    description: 'Host your most exclusive celebrations and corporate mixers in an atmosphere of pure sophistication.',
    image: EVENT_IMAGE,
    features: ['Event setup support', 'Premium audio system', '₦50,000 refundable fee', 'On-site Security']
  }
];

export const AMENITIES: Amenity[] = [
  { icon: <Zap className="w-6 h-6 text-gold" />, title: '24-Hour Power', description: 'Uninterrupted electricity with industrial-grade backup systems.' },
  { icon: <Wifi className="w-6 h-6 text-gold" />, title: 'High-Speed Internet', description: 'Business-grade fiber optic connectivity for seamless work.' },
  { icon: <Shield className="w-6 h-6 text-gold" />, title: 'Secure Environment', description: '24/7 armed security and high-end privacy controls.' },
  { icon: <Tv className="w-6 h-6 text-gold" />, title: 'Smart Entertainment', description: '4K Smart TVs with full Netflix and DSTV streaming access.' },
  { icon: <Utensils className="w-6 h-6 text-gold" />, title: 'Modern Kitchen', description: 'Fully equipped with premium appliances and designer finishes.' },
  { icon: <Calendar className="w-6 h-6 text-gold" />, title: '24/7 Service', description: 'Around-the-clock availability by private appointment.' }
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Osas D.', rating: 5, text: 'The most stylish place I’ve stayed in Benin. Pure luxury and impeccable service.', date: '2 weeks ago' },
  { id: '2', author: 'Ifeoma E.', rating: 4, text: 'Fantastic attention to detail. The security and privacy gave me absolute peace of mind.', date: '1 month ago' },
  { id: '3', author: 'Chidi K.', rating: 5, text: 'Signature Stay indeed. This is the new gold standard for accommodation in the GRA.', date: '2 months ago' }
];

export const GALLERY_IMAGES = [
  MAIN_PROPERTY_IMAGE,
  INTERIOR_IMAGE_1,
  INTERIOR_IMAGE_2,
  INTERIOR_IMAGE_3,
  INTERIOR_IMAGE_4,
  INTERIOR_IMAGE_5,
  INTERIOR_IMAGE_6,
  INTERIOR_IMAGE_7,
  INTERIOR_IMAGE_8,
  EVENT_IMAGE
];