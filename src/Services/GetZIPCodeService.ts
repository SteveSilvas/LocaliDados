import { Adress } from "../@Types/Adress";
import HttpRequest from "./Requester";

const GetZIPCodeService = async (adress: Adress): Promise<Adress | null> => {
    try {
        if (!validateFields(adress)) return null;

        const endPoit: string = buildEndPoint(adress);
        
        const result = await HttpRequest(endPoit);
        
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const validateFields = (adress: Adress): boolean => {
    if (!adress || !adress.uf || !adress.localidade || !adress.logradouro)
        return false;

    if (
        adress.uf.length != 2 ||
        adress.localidade.length < 3 ||
        adress.logradouro.length < 3
    ) return false;

    return true;
};

const buildEndPoint = (adress: Adress): string => {
    let rua:String = adress.logradouro;
    const adressFormated: string = `${adress.uf}/${adress.localidade}/${rua}`;
    const host: string = "https://viacep.com.br/ws/";
    const format: string = "/json";

    return `${host}${adressFormated}${format}`;
};

export default GetZIPCodeService;
