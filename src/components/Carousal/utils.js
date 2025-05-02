

export const fetchData = async (url)=>{
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error('Netowk Response not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}