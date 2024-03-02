
import CarouselOne from './../assets/images/carousel_1.png'
import CarouselTwo from './../assets/images/carousel_2.png'
import CarouselThree from './../assets/images/carousel_3.png'

import ImageOne from './../assets/images/image-4.png';
import ImageTwo from './../assets/images/image-5.png';
import ImageThree from './../assets/images/image-6.png';
import ImageFour from './../assets/images/image-1.png';
import ImageFive from './../assets/images/image-2.png';
import ImageSix from './../assets/images/image-3.png';

import BestQuality from './../assets/icons/Best_Quality.png';
import MonthlySearches from './../assets/icons/Monthly_Searches.png';
import OwnersAdvertise from './../assets/icons/Owners_Advertise.png';
import ProfessionalEngineer from './../assets/icons/Professional_Engineer.png';
import PropertyListing from './../assets/icons/Property_Listing.png';
import StrategicLocation from './../assets/icons/Strategic_Location.png';

export { CarouselOne as CarouselOneImage, CarouselTwo as CarouselTwoImage, CarouselThree as CarouselThreeImage };
export { BestQuality as BestQualityIcon, MonthlySearches as MonthlySearchesIcon, OwnersAdvertise as OwnersAdvertiseIcon, ProfessionalEngineer as ProfessionalEngineerIcon, PropertyListing as PropertyListingIcon, StrategicLocation as StrategicLocationIcon };
export { ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix };

export const images = [
  {
    label: 'Luxury Grand Residence City',
    brand: 'By Smart Home Developer Limited.',
    type: '1, 2, 3 BHK Apartments',
    location: 'San Diego, California',
    priceMin: 500000,
    priceMax: 1200000,
    imgPath: CarouselOne,
  },
  {
    label: 'Bird Sanctuary Retreat',
    brand: "By Nature's Haven Estates",
    type: 'Eco-Friendly Cabins',
    location: 'Asheville, North Carolina',
    priceMin: 250000,
    priceMax: 600000,
    imgPath: CarouselTwo
  },
  {
    label: 'Exotic Beachfront Villa',
    brand: 'By Seaside Escapes LLC',
    type: 'Luxury Beach Houses',
    location: 'Maui, Hawaii',
    priceMin: 1000000,
    priceMax: 3500000,
    imgPath: CarouselThree
  },
];

export const propertyTypeData = [
  {id: 1, value: 'residential_apartment', label: 'Residential Apartment'},
  {id: 2, value: 'single_family_home', label: 'Single Family Home'},
  {id: 3, value: 'townhouse', label: 'Townhouse'},
  {id: 4, value: 'condominium', label: 'Condominium'},
  {id: 5, value: 'duplex', label: 'Duplex'},
  {id: 6, value: 'multi_family_home', label: 'Multi-Family Home'},
  {id: 7, value: 'villa', label: 'Villa'},
  {id: 8, value: 'cottage', label: 'Cottage'},
  {id: 9, value: 'bungalow', label: 'Bungalow'},
  {id: 10, value: 'penthouse', label: 'Penthouse'},
  {id: 11, value: 'loft', label: 'Loft'},
  {id: 12, value: 'studio_apartment', label: 'Studio Apartment'},
  {id: 13, value: 'manufactured_home', label: 'Manufactured Home'},
  {id: 14, value: 'mobile_home', label: 'Mobile Home'},
]

export const priceRangeData = [
  {id: 1, value: '1000 - 2000', label: '$ 1000 - $ 2000'},
  {id: 2, value: '2000 - 3000', label: '$ 2000 - $ 3000'},
  {id: 3, value: '3000 - 4000', label: '$ 3000 - $ 4000'},
  {id: 4, value: '4000 - 5000', label: '$ 4000 - $ 5000'},
  {id: 5, value: '5000 - 6000', label: '$ 5000 - $ 6000'},
  {id: 6, value: '6000 - 7000', label: '$ 6000 - $ 7000'},
  {id: 7, value: '7000 - 8000', label: '$ 7000 - $ 8000'},
  {id: 8, value: '8000 - 9000', label: '$ 8000 - $ 9000'},
  {id: 9, value: '9000 - 10000', label: '$ 9000 - $ 10000'},
]

export const iconSet = [
  {
    label: 'Best Quality',
    imageUrl: ImageOne,
    icon: BestQuality
  },
  {
    label: 'Professional Engineer',
    imageUrl: ImageTwo,
    icon: ProfessionalEngineer
  },
  {
    label: '50 Lakh plus* Monthly Searches',
    imageUrl: ImageThree,
    icon: MonthlySearches
  },
  {
    label: '5 Lakh plus* Property Listing',
    imageUrl: ImageFour,
    icon: PropertyListing
  },
  {
    label: '5 Lakh plus* owners advertise',
    imageUrl: ImageFive,
    icon: OwnersAdvertise
  },
  {
    label: '50 Lakh plus* Monthly Searches',
    imageUrl: ImageSix,
    icon: StrategicLocation
  },
]
