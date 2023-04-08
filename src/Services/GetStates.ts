const GetStates = async ()=>{
    try {
        const url:string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

        const response = await fetch(url, {
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
}

export default GetStates;