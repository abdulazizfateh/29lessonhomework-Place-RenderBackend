const url = "http://localhost:3000";

export const getBuy = async () => {
    try {
        const response = await fetch(`${url}/buy`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getNew = async () => {
    try {
        const response = await fetch(`${url}/new`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getRec = async () => {
    try {
        const response = await fetch(`${url}/rec`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}