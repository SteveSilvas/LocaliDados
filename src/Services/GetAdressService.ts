const GetAdressService = async (zipCode:string)=>{
    try {
        if(!zipCode || zipCode.length != 8) return;

        const host:string = "https://viacep.com.br/ws/";
        const format: string = "/json";

        const response = await fetch(`${host}${zipCode}${format}`, {
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

export default GetAdressService;