
import React from 'react';

export interface ApartmentType {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
}