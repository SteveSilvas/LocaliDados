import { Adress } from "../@Types/Adress";

const GetZIPCodeService = async (adress: Adress) => {
    try {
        if (!adress || !adress.uf || !adress.localidade || !adress.logradouro) return;

        if (adress.uf.length != 2 || adress.localidade.length < 3 || adress.logradouro.length < 3) return;

        const adressFormated: string = `${adress.uf}/${adress.localidade}/${adress.logradouro}`;
        const host: string = "https://viacep.com.br/ws/";
        const format: string = "/json";

        const response = await fetch(`${host}${adressFormated}${format}`, {
            method: "GET",
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

export default GetZIPCodeService;
