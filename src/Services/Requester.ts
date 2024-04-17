const HttpRequest = async (url: string, method?: string): Promise<any> => {
    try {
        const response = await fetch(url, {
            method: method ?? "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default HttpRequest;
