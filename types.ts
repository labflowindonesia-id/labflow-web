import React from 'react';

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface BrandItem {
  name: string;
  logo: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}