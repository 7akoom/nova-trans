import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/config/api.config";

interface Employee {
  id: number;
  name: string;
  ar_position: string;
  en_position: string;
  image: string;
}

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/employees`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch employees');
        }
        
        const data = await res.json();
        
        if (data.status === "success") {
          setEmployees(data.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, error };
};