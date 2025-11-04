// Types for Shipping & Logistics Platform

export interface ShipmentTracking {
  trackingNumber: string;
  status: ShipmentStatus;
  origin: Location;
  destination: Location;
  currentLocation?: Location;
  estimatedDelivery: string;
  actualDelivery?: string;
  updates: TrackingUpdate[];
}

export enum ShipmentStatus {
  PENDING = "pending",
  IN_TRANSIT = "in_transit",
  OUT_FOR_DELIVERY = "out_for_delivery",
  DELIVERED = "delivered",
  DELAYED = "delayed",
  CANCELLED = "cancelled",
}

export interface Location {
  city: string;
  country: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface TrackingUpdate {
  timestamp: string;
  status: ShipmentStatus;
  location: Location;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  nameAr: string;
  type: ServiceType;
  description: string;
  descriptionAr: string;
  icon: string;
  features: string[];
  estimatedDays: number;
}

export enum ServiceType {
  AIR = "air",
  SEA = "sea",
  LAND = "land",
  LOGISTICS = "logistics",
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  origin: string;
  destination: string;
  weight: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
