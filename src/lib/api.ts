// API Service Layer - Ready for backend integration
import { ShipmentTracking, QuoteRequest, ContactForm, ShipmentStatus } from "@/types/shipping";

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

// Generic fetch wrapper with error handling
async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

// Shipment Tracking API
export const trackingAPI = {
  getShipment: async (trackingNumber: string): Promise<ShipmentTracking> => {
    // TODO: Replace with actual API call
    return fetchAPI<ShipmentTracking>(`/tracking/${trackingNumber}`);
  },

  getShipmentHistory: async (trackingNumber: string) => {
    return fetchAPI(`/tracking/${trackingNumber}/history`);
  },
};

// Quote Request API
export const quoteAPI = {
  submitQuote: async (data: QuoteRequest): Promise<{ success: boolean; id: string }> => {
    // TODO: Replace with actual API call
    return fetchAPI("/quotes", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  getQuote: async (id: string) => {
    return fetchAPI(`/quotes/${id}`);
  },
};

// Contact Form API
export const contactAPI = {
  submitContact: async (data: ContactForm): Promise<{ success: boolean }> => {
    // TODO: Replace with actual API call
    return fetchAPI("/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

// Services API
export const servicesAPI = {
  getAll: async () => {
    return fetchAPI("/services");
  },

  getById: async (id: string) => {
    return fetchAPI(`/services/${id}`);
  },
};

// Mock data for development (remove when backend is ready)
export const mockTracking: ShipmentTracking = {
  trackingNumber: "SH123456789",
  status: ShipmentStatus.IN_TRANSIT,
  origin: {
    city: "دبي",
    country: "الإمارات",
  },
  destination: {
    city: "الرياض",
    country: "السعودية",
  },
  currentLocation: {
    city: "جدة",
    country: "السعودية",
  },
  estimatedDelivery: "2024-12-05",
  updates: [
    {
      timestamp: "2024-12-01T10:00:00Z",
      status: ShipmentStatus.PENDING,
      location: { city: "دبي", country: "الإمارات" },
      description: "تم استلام الشحنة",
    },
    {
      timestamp: "2024-12-02T14:30:00Z",
      status: ShipmentStatus.IN_TRANSIT,
      location: { city: "جدة", country: "السعودية" },
      description: "الشحنة في الطريق",
    },
  ],
};
