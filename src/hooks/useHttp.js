import { useState, useCallback } from "react";
import axios from "axios";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        const response = await axios({ url, method, body, headers });
        setLoading(false);
        return response.data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );
  const clearError = () => setError(null);
  return { loading, request, error, clearError };
};
