import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/api.config";

interface ServiceFeature {
  ar_feature: string;
  en_feature: string;
}

interface Service {
  id: string;
  ar_name: string;
  en_name: string;
  ar_title: string;
  en_title: string;
  ar_features: string;
  en_features: string;
  icon: string;
  features: ServiceFeature[];
}

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/services`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch services');
        }
        
        const data = await res.json();
        
        if (data.status === "success") {
          setServices(data.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};