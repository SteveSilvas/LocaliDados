import HttpRequest from "./Requester";

const GetAdressService = async (zipCode: string) => {
    try {
        if (!zipCode || zipCode.length !== 8) return;

        const host: string = "https://viacep.com.br/ws/";
        const format: string = "/json";

        const response = await HttpRequest(`${host}${zipCode}${format}`);

        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default GetAdressService;
