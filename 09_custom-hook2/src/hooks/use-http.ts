import { useCallback, useState } from "react";
import { FetchType, applyDataFunc } from "../types/fetchType";

interface httpError {
    message: string;
}

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendRequest = useCallback(async (requestConfig: FetchType, applyData: applyDataFunc) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                headers: requestConfig.headers ? requestConfig.headers : {},
            });

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            const error = err as httpError;
            setError(error.message || "Something went wrong!");
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
