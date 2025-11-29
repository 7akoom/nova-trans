import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/api.config";

interface Client {
  id: number;
  name: string;
  logo: string;
}

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/clients`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch clients');
        }
        
        const data = await res.json();
        
        if (data.status === "success") {
          setClients(data.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return { clients, loading, error };
};