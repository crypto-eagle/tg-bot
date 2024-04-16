import {useEffect, useState} from "react";

function useFetch<TResult>(request: () => Promise<TResult>) {
    const [data, setData] = useState<TResult | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true)
        setData(null);
        setError(null);

        (async () => {
            try {
                return await request();
            } catch (e) {
                setError(e as string);
            } finally {
                setLoading(false);
            }
        })();
    }, [request])

    return {data, loading, error}
}

export default useFetch;
