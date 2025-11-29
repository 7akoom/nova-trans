import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/api.config";

interface Settings {
  phone: string;
  email: string;
  ar_address: string;
  en_address: string;
  ar_about_us: string;
  en_about_us: string;
}

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/settings`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch settings');
        }
        
        const data = await res.json();
        
        if (data.status === "success" && data.data.length > 0) {
          setSettings(data.data[0]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, error };
};